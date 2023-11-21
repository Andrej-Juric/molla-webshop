"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"
import { useState } from "react"

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()
  const [containerClass, setContainerClass] = useState("container")
  const [isBottomSticky, setIsBottomSticky] = useState(false)

  return (
    <div className="footer footer-dark">
      <div className="footer-middle">
        <div className={containerClass}>
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="widget widget-about">
                <img
                  src="images/logo-footer.png"
                  className="footer-logo"
                  alt="Footer Logo"
                  width="105"
                  height="25"
                />
                <p>
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat.
                </p>

                <div className="social-icons">
                  <Link href="#" className="social-icon" title="Facebook">
                    <i className="icon-facebook-f"></i>
                  </Link>
                  <Link href="#" className="social-icon" title="Twitter">
                    <i className="icon-twitter"></i>
                  </Link>
                  <Link href="#" className="social-icon" title="Instagram">
                    <i className="icon-instagram"></i>
                  </Link>
                  <Link href="#" className="social-icon" title="Youtube">
                    <i className="icon-youtube"></i>
                  </Link>
                  <Link href="#" className="social-icon" title="Pinterest">
                    <i className="icon-pinterest"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Useful Links</h4>

                <ul className="widget-list">
                  <li>
                    <Link href="/pages/about">About Molla</Link>
                  </li>
                  <li>
                    <Link href="#">How to shop on Molla</Link>
                  </li>
                  <li>
                    <Link href="#">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/pages/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link href="/account">Log in</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>

                <ul className="widget-list">
                  <li>
                    <Link href="#">Payment Methods</Link>
                  </li>
                  <li>
                    <Link href="#">Money-back guarantee!</Link>
                  </li>
                  <li>
                    <Link href="#">Returns</Link>
                  </li>
                  <li>
                    <Link href="#">Shipping</Link>
                  </li>
                  <li>
                    <Link href="#">Terms and conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>

                <ul className="widget-list">
                  <li>
                    <Link href="/account">Sign In</Link>
                  </li>
                  <li>
                    <Link href="/cart">View Cart</Link>
                  </li>
                  <li>
                    <Link href="/shop/wishlist">My Wishlist</Link>
                  </li>
                  <li>
                    <Link href="/shop/dashboard">Track My Order</Link>
                  </li>
                  <li>
                    <Link href="#">Help</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div>
              <Link href="/" className="text-xl-semi uppercase">
                Acme
              </Link>
            </div> */}

            {/* <div className="text-small-regular grid grid-cols-3 gap-x-10 md:gap-x-16">
              {product_categories && (
                <div className="flex flex-col gap-y-2">
                  <span className="text-base-semi">Categories</span>
                  <ul className="grid grid-cols-1 gap-2">
                    {product_categories?.slice(0, 6).map((c) => {
                      if (c.parent_category) {
                        return
                      }

                      const children =
                        c.category_children?.map((child) => ({
                          name: child.name,
                          handle: child.handle,
                          id: child.id,
                        })) || null

                      return (
                        <li className="flex flex-col gap-2" key={c.id}>
                          <Link
                            className={clsx(children && "text-small-semi")}
                            href={`/${c.handle}`}
                          >
                            {c.name}
                          </Link>
                          {children && (
                            <ul className="grid grid-cols-1 ml-3 gap-2">
                              {children &&
                                children.map((child) => (
                                  <li key={child.id}>
                                    <Link href={`/${child.handle}`}>
                                      {child.name}
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
              {collections && (
                <div className="flex flex-col gap-y-2">
                  <span className="text-base-semi">Collections</span>
                  <ul
                    className={clsx("grid grid-cols-1 gap-2", {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    })}
                  >
                    {collections?.slice(0, 6).map((c) => (
                      <li key={c.id}>
                        <Link href={`/collections/${c.handle}`}>{c.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-col gap-y-2">
                <span className="text-base-semi">Medusa</span>
                <ul className="grid grid-cols-1 gap-y-2">
                  <li>
                    <a
                      href="https://github.com/medusajs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.medusajs.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/medusajs/nextjs-starter-medusa"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source code
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2022 ACME
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div> */}
      <div className="footer-bottom">
        <div className={`pb-2 pt-2 ${containerClass}`}>
          <p className="footer-copyright">
            Copyright © {new Date().getFullYear()} Molla Store. All Rights
            Reserved.
          </p>

          <figure className="footer-payments">
            <img
              src="images/payments.png"
              alt="Payment methods"
              width="272"
              height="20"
            />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
