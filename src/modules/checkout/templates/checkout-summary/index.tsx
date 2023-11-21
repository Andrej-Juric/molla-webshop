"use client"

import DiscountCode from "@modules/checkout/components/discount-code"
import GiftCard from "@modules/checkout/components/gift-card"
import PaymentButton from "@modules/checkout/components/payment-button"
import CartTotals from "@modules/common/components/cart-totals"
import { useCart } from "medusa-react"

const CheckoutSummary = () => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <div className="summary">
      <h3 className="summary-title">Your Order</h3>

      <CartTotals cart={cart} />
      <PaymentButton paymentSession={cart?.payment_session} />

      {/* <div className="p-6 bg-white">
        <DiscountCode cart={cart} />
      </div>
      <GiftCard cart={cart} /> */}
    </div>
  )
}

export default CheckoutSummary
