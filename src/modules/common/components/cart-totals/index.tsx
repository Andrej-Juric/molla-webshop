import { Cart } from "@medusajs/medusa"
import { formatAmount } from "medusa-react"
import React from "react"

type CartTotalsProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const CartTotals: React.FC<CartTotalsProps> = ({ cart }) => {
  const {
    subtotal,
    discount_total,
    gift_card_total,
    tax_total,
    shipping_total,
    total,
  } = cart

  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: cart.region,
      includeTaxes: false,
    })
  }

  return (
    <table className="table table-summary">
      <tbody>
        <tr className="summary-subtotal">
          <td>Subtotal</td>
          <td>{getAmount(subtotal)}</td>
        </tr>
        <tr className="summary-shipping">
          <td>Taxes</td>
          <td>{getAmount(tax_total)}</td>
        </tr>

        {!!discount_total && (
          <tr className="summary-subtotal">
            <td>Discount</td>
            <td>- {getAmount(discount_total)}</td>
          </tr>
        )}
        {!!gift_card_total && (
          <tr className="summary-subtotal">
            <td>Gift card</td>
            <td>- {getAmount(gift_card_total)}</td>
          </tr>
        )}
        <tr className="summary-shipping">
          <td>Shipping</td>
          <td>{getAmount(shipping_total)}</td>
        </tr>

        <div className="h-px w-full border-b border-gray-200 border-dashed my-4" />
        <tr className="summary-total">
          <td>Total</td>
          <td>{getAmount(total)}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default CartTotals
