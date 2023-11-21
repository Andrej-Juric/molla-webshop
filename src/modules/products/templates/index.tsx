"use client"

import React, { useEffect, useRef, useState } from "react"
import { ProductProvider } from "@lib/context/product-context"
import { useIntersection } from "@lib/hooks/use-in-view"
import ProductInfo from "@modules/products/templates/product-info"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ImageGallery from "@modules/products/components/image-gallary"
import MobileActions from "@modules/products/components/mobile-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false)

  const info = useRef<HTMLDivElement>(null)

  const inView = useIntersection(info, "0px")

  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding")
    setIsOnboarding(onboarding === "true")
  }, [])
  console.log(product, "produkt2")

  return (
    <ProductProvider product={product}>
      <div className="main">
        <div className="page-content">
          <div className="container skeleton-body">
            <div className="product-details-top">
              <div className="row skel-pro-single">
                <div className="col-md-6">
                  <ImageGallery images={product?.images || []} />
                </div>
                <div className="col-md-6">
                  {/* {isOnboarding && <ProductOnboardingCta />} */}
                  <ProductInfo product={product} />
                </div>
              </div>
            </div>
            <ProductTabs product={product} />
            <div className="content-container my-16 px-6 small:px-8 small:my-32">
              <RelatedProducts product={product} />
            </div>
            <MobileActions product={product} show={!inView} />
          </div>
        </div>
      </div>
    </ProductProvider>
  )
}

export default ProductTemplate
