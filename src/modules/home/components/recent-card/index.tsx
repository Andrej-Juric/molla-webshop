import { useProductActions } from "@lib/context/product-context"
import ProductPreview from "@modules/products/components/product-preview"
import Link from "next/link"
import React from "react"

export default function RecentArrivalsCard({ p }: any) {
  const { addToCart } = useProductActions()

  console.log(p, "recentarrivalscard")
  console.log(p.variants[0].created_at, "variants")

  return (
    <div className="col-md-3">
      <div className="product product-11 text-center">
        <figure className="product-media">
          <ProductPreview {...p} />
        </figure>
        <div className="product-body">
          <div className="product-cat"></div>
          {p.variants && (
            <div className="product-action">
              {p.variants.length >= 2 ? (
                <Link
                  href={`/products/${p.handle}`}
                  className="btn-product btn-cart btn-select"
                >
                  <span>select options</span>
                </Link>
              ) : (
                p.variants.length === 1 && (
                  <button className="btn-product btn-cart" onClick={addToCart}>
                    <span>add to cart</span>
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
