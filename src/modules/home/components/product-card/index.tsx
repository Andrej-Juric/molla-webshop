import { useProductActions } from "@lib/context/product-context"
import ProductPreview from "@modules/products/components/product-preview"
import Link from "next/link"
import React from "react"
import { toast } from "react-hot-toast"

export default function ProductCard({ p }: any) {
  const { addToCart } = useProductActions()

  // console.log(p)

  return (
    <div className="col-md-3">
      <div className="product product-11 text-center">
        <ProductPreview {...p} />
        <div className="product-body">
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
