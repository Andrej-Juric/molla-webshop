import { CheckoutProvider } from "@lib/context/checkout-context"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Link from "next/link"
import CheckoutLoader from "../components/checkout-loader"
import CheckoutForm from "./checkout-form"
import CheckoutSummary from "./checkout-summary"
import FooterNav from "@modules/layout/components/footer-nav"
import Nav from "@modules/layout/templates/nav"

const CheckoutTemplate = () => {
  return (
    <CheckoutProvider>
      <Nav />
      <div
        className="page-header text-center"
        style={{ backgroundImage: `url(images/page-header-bg.jpg)` }}
      >
        <div className="container">
          <h1 className="page-title">
            Checkout
            <span>Shop</span>
          </h1>
        </div>
      </div>

      <div>
        {/* <div className="h-16 bg-white"></div> */}
        <div className="relative">
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
          <CheckoutLoader />
          <div className="page-content">
            <div className="checkout">
              <div className="container">
                <div className="checkout-discount"></div>
                <form>
                  <div className="row">
                    <div className="col-lg-9">
                      <CheckoutForm />
                    </div>
                    <aside className="col-lg-3">
                      <CheckoutSummary />
                    </aside>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <MedusaCTA /> */}
        <FooterNav />
      </div>
    </CheckoutProvider>
  )
}

export default CheckoutTemplate
