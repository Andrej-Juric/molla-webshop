"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Login from "@modules/account/components/login"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import HeaderMenu from "@modules/layout/components/header-menu"
import HeaderSearch from "@modules/layout/components/header-search"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Nav = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [containerClass, setContainerClass] = useState("container")

  function openMobileMenu() {
    document.querySelector("body").classList.add("menu-active")
  }
  useEffect(() => {
    setContainerClass(
      pathname.includes("fullwidth") ? "container-fluid" : "container"
    )
  }, [pathname])

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header
        className={clsx("header", {
          "!bg-white !border-gray-200": !isHome || isScrolled,
        })}
      >
        <div className="header-top">
          <div className={containerClass}>
            {/* <DropdownMenu /> */}
            <div className="header-left">
              <div className="header-dropdown">
                <Link href="#">Usd</Link>
                <div className="header-menu">
                  <ul>
                    <li>
                      <Link href="#">Eur</Link>
                    </li>
                    <li>
                      <Link href="#">Usd</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-dropdown">
                <Link href="#">Eng</Link>
                <div className="header-menu">
                  <ul>
                    <li>
                      <Link href="#">English</Link>
                    </li>
                    <li>
                      <Link href="#">French</Link>
                    </li>
                    <li>
                      <Link href="#">Spanish</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="header-right">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <ul className="top-menu">
                <li>
                  <Link href="#">Links</Link>
                  <ul>
                    <li>
                      <a href="tel:#">
                        <i className="icon-phone"></i>Call: +0123 456 789
                      </a>
                    </li>

                    <li>
                      <Link href="/pages/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/pages/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/login">LogIn</Link>
                    </li>
                    <li>
                      <Link href="/account">Account</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <MobileMenu />
          </div>
        </div>
        <div className="header-middle sticky-header">
          <div className={containerClass}>
            <div className="header-left">
              <div className="block small:hidden">
                <Hamburger setOpen={toggle} />
              </div>
              <Link href="/" className="logo">
                <img
                  src="images/logo.png"
                  alt="Molla Logo"
                  width={105}
                  height={24}
                />
              </Link>
              <HeaderMenu />
            </div>
            <div className="header-right">
              <HeaderSearch />
              <CartDropdown />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Nav
