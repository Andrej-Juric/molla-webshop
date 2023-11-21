"use client"

import Addresses from "@modules/checkout/components/addresses"
import Payment from "@modules/checkout/components/payment"
import Shipping from "@modules/checkout/components/shipping"
import { useCart } from "medusa-react"

const CheckoutForm = () => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <>
      <Addresses />

      <Shipping cart={cart} />

      <Payment />
    </>
  )
}

export default CheckoutForm
