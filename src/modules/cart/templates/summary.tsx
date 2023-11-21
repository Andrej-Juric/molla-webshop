import { Cart } from "@medusajs/medusa"
import Button from "@modules/common/components/button"
import CartTotals from "@modules/common/components/cart-totals"
import Link from "next/link"

type SummaryProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const Summary = ({ cart }: SummaryProps) => {
  return (
    <>
      <CartTotals cart={cart} />
      <Link
        href="/checkout"
        className="btn btn-outline-primary-2 btn-order btn-block"
      >
        Proceed to Checkout
      </Link>
    </>
  )
}

export default Summary
