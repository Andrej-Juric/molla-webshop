import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import React from "react"

export default function HeaderMenu() {
  const router = useRouter()
  const pathname = usePathname()
  let query = router.query
  return (
    <nav className="main-nav">
      <ul className="menu sf-arrows">
        <li className={pathname.indexOf("/shop") > -1 ? "active" : ""}>
          <Link href="/shop/sidebar/list" className="sf-with-ul" scroll={false}>
            Shop
          </Link>

          <div className="megamenu megamenu-md">
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="menu-col">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="menu-title">Shop all products</div>
                      <ul>
                        <li
                          className={
                            pathname.indexOf("shop/sidebar") > -1 &&
                            query.type == "list"
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/store" scroll={false}>
                            Collections
                          </Link>
                        </li>
                      </ul>

                      <div className="menu-title">Product category</div>
                      <ul>
                        <li
                          className={
                            pathname.indexOf("shop/nosidebar") > -1 &&
                            query.type == "boxed"
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/womans" scroll={false}>
                            <span>
                              WOMANS
                              <span className="tip tip-hot">Hot</span>
                            </span>
                          </Link>
                        </li>
                        <li
                          className={
                            pathname.indexOf("shop/nosidebar") > -1 &&
                            query.type == "fullwidth"
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/mans" scroll={false}>
                            Mans
                          </Link>
                        </li>
                        <li
                          className={
                            pathname.indexOf("shop/nosidebar") > -1 &&
                            query.type == "fullwidth"
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/summer-clothes" scroll={false}>
                            Summer clothes
                          </Link>
                        </li>

                        <li
                          className={
                            pathname.indexOf("shop/nosidebar") > -1 &&
                            query.type == "fullwidth"
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/winter-clothes" scroll={false}>
                            Winter clothes
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-6">
                      {/* <div className="menu-title">All category</div>
                      <ul>
                        <li
                          className={
                            pathname.indexOf("shop/category/boxed") > -1
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/category/" scroll={false}>
                            Show all categories
                          </Link>
                        </li>
                      </ul> */}
                      <div className="menu-title">Shop Pages</div>
                      <ul>
                        <li
                          className={
                            pathname.indexOf("shop/cart") > -1 ? "active" : ""
                          }
                        >
                          <Link href="/cart">Cart</Link>
                        </li>
                        <li
                          className={
                            pathname.indexOf("shop/checkout") > -1
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/checkout">Checkout</Link>
                        </li>

                        <li
                          className={
                            pathname.indexOf("shop/dashboard") > -1
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/account">My Account</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="banner banner-overlay">
                  <Link
                    href="/shop/sidebar/list"
                    className="banner banner-menu"
                  >
                    <img src="images/menu/banner-1.jpg" alt="Banner" />

                    <div className="banner-content banner-content-top">
                      <div className="banner-title text-white">
                        Last <br />
                        Chance
                        <br />
                        <span>
                          <strong>Sale</strong>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}
