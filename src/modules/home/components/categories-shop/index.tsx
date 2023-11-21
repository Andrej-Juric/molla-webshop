"use client"
import { useProductCategories } from "medusa-react"
import Link from "next/link"
import React from "react"

export default function ShopByCategories() {
  const { product_categories } = useProductCategories()

  console.log(product_categories, "kategorije")

  return (
    <div className="container pt-6">
      <h2 className="title-lg text-center mb-4">Shop by Categories</h2>

      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <div className="banner banner-display banner-badge lazy-media banner-lg">
            <figure className="mb-0">
              <div className="lazy-overlay"></div>
              <img src="images/home/banners/banner-1.jpg" />
              {/* <LazyLoadImage
            alt="banner"
            src="images/home/banners/banner-1.jpg"
            threshold={200}
            width="376"
            height="auto"
            effect="blur"
          /> */}
            </figure>

            <div className="banner-content banner-content-center">
              <Link
                className="banner-link"
                href={`/${product_categories && product_categories[0].handle}`}
              >
                <h3 className="banner-title mb-0">
                  {product_categories && product_categories[0].name}
                </h3>
                <span className="banner-link-text">
                  Shop Now<i className="icon-long-arrow-right ml-2"></i>{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 order-lg-last">
          <div className="banner banner-display banner-lg banner-badge lazy-media">
            <figure className="mb-0">
              <div className="lazy-overlay"></div>

              {/* <LazyLoadImage
            alt="banner"
            src="images/home/banners/banner-4.jpg"
            threshold={200}
            width="376"
            height="auto"
            effect="blur"
          /> */}
            </figure>
            <div className="banner-content banner-content-center">
              <Link
                className="banner-link"
                href={`/${product_categories && product_categories[1].handle}`}
              >
                <h3 className="banner-title mb-0">
                  {product_categories && product_categories[1].name}
                </h3>
                <span className="banner-link-text">
                  Shop Now<i className="icon-long-arrow-right ml-2"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-lg-4">
          <div className="row">
            <div className="col-lg-12 col-sm-6 col-xs-12">
              <div className="banner banner-display banner-badge banner-sm lazy-media">
                <figure className="mb-0">
                  <div className="lazy-overlay"></div>

                  {/* <LazyLoadImage
                alt="banner"
                src="images/home/banners/banner-2.jpg"
                threshold={200}
                width="376"
                height="auto"
                effect="blur"
              /> */}
                </figure>

                <div className="banner-content banner-content-center">
                  <div className="banner-content banner-content-center">
                    <Link
                      className="banner-link"
                      href={`/${
                        product_categories && product_categories[2].handle
                      }`}
                    >
                      <h3 className="banner-title mb-0">
                        {product_categories && product_categories[2].name}
                      </h3>
                      <span className="banner-link-text">
                        Shop Now<i className="icon-long-arrow-right ml-2"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-sm-6 col-xs-12">
              <div className="banner banner-display banner-badge banner-sm lazy-media">
                <figure className="mb-0">
                  <div className="lazy-overlay"></div>

                  {/* <LazyLoadImage
                alt="banner"
                src="images/home/banners/banner-3.jpg"
                threshold={200}
                width="376"
                height="auto"
                effect="blur"
              /> */}
                </figure>

                <div className="banner-content banner-content-center">
                  <Link
                    className="banner-link"
                    href={`/${
                      product_categories && product_categories[3].handle
                    }`}
                  >
                    <h3 className="banner-title mb-0">
                      {product_categories && product_categories[3].name}
                    </h3>
                    <span className="banner-link-text">
                      Shop Now<i className="icon-long-arrow-right ml-2"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className="container pt-6">
  //     <h2 className="title-lg text-center mb-4">Shop by Categories</h2>

  //     <div className="row">
  //       {product_categories?.map((category, index) => (
  //         <div key={index} className="col-sm-6 col-lg-4">
  //           <div className="banner banner-display banner-badge lazy-media banner-lg">
  //             <figure className="mb-0">
  //               <div className="lazy-overlay"></div>
  //               {/* neka fotka */}
  //             </figure>
  //             <div className="banner-content banner-content-center">
  //               <Link className="banner-link" href={`/${category.handle}`}>
  //                 <h3 className="banner-title mb-0">{category.name}</h3>
  //                 <span className="banner-link-text">
  //                   Shop Now <i className="icon-long-arrow-right ml-2"></i>
  //                 </span>
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // )
}
