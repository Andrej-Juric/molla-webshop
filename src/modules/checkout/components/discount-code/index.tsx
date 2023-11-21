import { medusaClient } from "@lib/config"
import { Cart } from "@medusajs/medusa"
import { formatAmount, useCart, useUpdateCart } from "medusa-react"
import React, { useMemo } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import Button from "@modules/common/components/button"

type DiscountFormValues = {
  discount_code: string
}

type DiscountCodeProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const DiscountCode: React.FC<DiscountCodeProps> = ({ cart }) => {
  const { id, discounts, region } = cart
  const { mutate, isLoading } = useUpdateCart(id)
  const { setCart } = useCart()

  const { isLoading: mutationLoading, mutate: removeDiscount } = useMutation(
    (payload: { cartId: string; code: string }) => {
      return medusaClient.carts.deleteDiscount(payload.cartId, payload.code)
    }
  )

  const appliedDiscount = useMemo(() => {
    if (!discounts || !discounts.length) {
      return undefined
    }

    switch (discounts[0].rule.type) {
      case "percentage":
        return `${discounts[0].rule.value}%`
      case "fixed":
        return `- ${formatAmount({
          amount: discounts[0].rule.value,
          region: region,
        })}`

      default:
        return "Free shipping"
    }
  }, [discounts, region])

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<DiscountFormValues>({
    mode: "onSubmit",
  })

  const onApply = (data: DiscountFormValues) => {
    mutate(
      {
        discounts: [{ code: data.discount_code }],
      },
      {
        onSuccess: ({ cart }) => setCart(cart),
        onError: () => {
          setError(
            "discount_code",
            {
              message: "Code is invalid",
            },
            {
              shouldFocus: true,
            }
          )
        },
      }
    )
  }

  const onRemove = () => {
    removeDiscount(
      { cartId: id, code: discounts[0].code },
      {
        onSuccess: ({ cart }) => {
          setCart(cart)
        },
      }
    )
  }

  return (
    <form onSubmit={handleSubmit(onApply)} className="#">
      <div className="input-group">
        {appliedDiscount ? (
          <div className="flex items-center justify-between">
            <div>
              <button className="btn btn-outline-primary-2" type="submit">
                <i className="icon-long-arrow-right"></i>
              </button>
              <span className="font-semibold">{appliedDiscount}</span>
            </div>
            <div>
              <button
                className="btn btn-outline-primary-2"
                onClick={onRemove}
                disabled={isLoading}
              >
                <span className="sr-only">Remove gift card from order</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onApply)} className="#">
            <div className="input-group">
              <input
                placeholder="coupon code"
                {...register("discount_code", {
                  required: "Code is required",
                })}
                className="form-control"
                type="text"
              />
              <div className="input-group-append">
                <Button
                  className="btn btn-outline-primary-2"
                  disabled={isLoading}
                  isLoading={isLoading}
                >
                  <i className="icon-long-arrow-right"></i>
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </form>
  )
}

export default DiscountCode
