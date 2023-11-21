"use client"

import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items"
import DiscountCode from "@modules/checkout/components/discount-code"
import SkeletonCartPage from "@modules/skeletons/templates/skeleton-cart-page"
import { useCart, useMeCustomer } from "medusa-react"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import ItemsTemplate from "./items"
import Summary from "./summary"
import Link from "next/link"

const CartTemplate = () => {
  const { cart } = useCart()
  const { customer, isLoading } = useMeCustomer()
  const items = useEnrichedLineItems()

  if (!cart || !cart?.id?.length || isLoading) {
    return <SkeletonCartPage />
  }

  return (
    <>
      <div
        className="page-header text-center"
        style={{ backgroundImage: `url(images/page-header-bg.jpg)` }}
      >
        <div className="container">
          <h1 className="page-title">
            Shopping Cart
            <span>Shop</span>
          </h1>
        </div>
      </div>
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/store">Shop</Link>
            </li>
            <li className="breadcrumb-item active">Checkout</li>
          </ol>
        </div>
      </nav>
      <div className="page-content pb-5">
        <div className="cart">
          <div className="container">
            {cart.items.length ? (
              <div className="row">
                <div className="col-lg-9">
                  {/* <div className="col-lg-9"> */}
                  <ItemsTemplate region={cart?.region} items={items} />
                  <div className="cart-bottom">
                    <div className="cart-discount">
                      <DiscountCode cart={cart} />
                      <div className="btn-wrap">
                        <button className="btn btn-outline-primary">
                          <span>Button</span>
                        </button>
                      </div>
                    </div>
                    <button className="btn btn-outline-dark-2">
                      <span>UPDATE CART</span>
                      <i className="icon-refresh"></i>
                    </button>
                  </div>
                </div>
                <aside className="col-lg-3">
                  <div className="summary summary-cart">
                    <h3 className="summary-title">Cart Total</h3>
                    {cart && cart.region && (
                      <>
                        <Summary cart={cart} />
                      </>
                    )}
                  </div>
                  {/* <div className="bg-white p-6"></div> */}
                  <Link
                    href={"/store"}
                    className="btn btn-outline-dark-2 btn-block mb-3"
                  >
                    <span>CONTINUE SHOPPING</span>
                  </Link>
                </aside>
              </div>
            ) : (
              <div>
                {!customer && <SignInPrompt />}
                <EmptyCartMessage />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CartTemplate
