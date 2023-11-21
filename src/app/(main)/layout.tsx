"use client"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import "../../../public/scss/style.scss"

import { useEffect } from "react"
import Script from "next/script"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let scrollTop: any

  useEffect(() => {
    scrollTop = document.querySelector("#scroll-top")
    window.addEventListener("scroll", scrollHandler, false)
  }, [])

  function toScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  function scrollHandler() {
    if (window.pageYOffset >= 400) {
      scrollTop.classList.add("show")
    } else {
      scrollTop.classList.remove("show")
    }
  }
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Manrope:400,500,600,700,800,900"
        />
        {/* <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" /> */}
        <link rel="stylesheet" type="text/css" href="css/fonts-molla.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/line-awesome/css/line-awesome.min.css"
        />
        {/* <Script src="js/jquery.min.js"></Script> */}
      </head>
      <div className="page-wrapper">
        <Nav />
        {children}
        <Footer />
      </div>
      <button id="scroll-top" title="Back to top" onClick={toScrollTop}>
        <i className="icon-arrow-up"></i>
      </button>
    </>
  )
}
