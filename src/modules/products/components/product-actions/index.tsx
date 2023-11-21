import { useProductActions } from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Button from "@modules/common/components/button"
import OptionSelect from "@modules/products/components/option-select"
import clsx from "clsx"
import Link from "next/link"
import React, { useMemo } from "react"
import { Product } from "types/medusa"

type ProductActionsProps = {
  product: PricedProduct
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const {
    updateOptions,
    addToCart,
    options,
    inStock,
    variant,
    increaseQuantity,
    decreaseQuantity,
    quantity,
    maxQuantityMet,
  } = useProductActions()

  const price = useProductPrice({ id: product.id!, variantId: variant?.id })

  // console.log(product, "produkt")

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="product-title">{product.title}</h1>

      <div className="ratings-container">
        <div className="ratings">
          <div className="ratings-val"></div>
          <span className="tooltip-text"></span>
        </div>
        <span className="ratings-text"> Reviews </span>
      </div>

      <div className="product-price">
        {selectedPrice ? (
          <>
            <span className="new-price">{selectedPrice.calculated_price}</span>
            {selectedPrice.price_type === "sale" && (
              <>
                <p>
                  <span className="line-through">
                    {selectedPrice.original_price}
                  </span>

                  {/* <span className="new-price">
                    -{selectedPrice.percentage_diff}%
                  </span> */}
                </p>
              </>
            )}
          </>
        ) : (
          <div></div>
        )}
      </div>

      <p>{product.description}</p>

      {product.variants.length > 1 && (
        <div className="my-8 flex flex-col gap-y-6">
          {(product.options || []).map((option) => {
            return (
              <div key={option.id}>
                <OptionSelect
                  option={option}
                  current={options[option.id]}
                  updateOption={updateOptions}
                  title={option.title}
                />
              </div>
            )
          })}
        </div>
      )}

      <div className="details-filter-row details-row-size">
        <label>Qty:</label>

        <div className="product-details-quantity">
          <div className="input-group input-spinner">
            <div className="input-group-prepend">
              <button
                onClick={decreaseQuantity}
                className="btn btn-decrement btn-spinner"
                type="button"
              >
                <i className="icon-minus"></i>
              </button>
            </div>
            <input
              value={quantity}
              type="number"
              className="form-control text-center"
              readOnly
            />
            <div className="input-group-append">
              <button
                onClick={increaseQuantity}
                className="btn btn-increment btn-spinner"
                type="button"
              >
                {!maxQuantityMet && <i className="icon-plus"></i>}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-details-action">
        {inStock ? (
          <Button onClick={addToCart}>
            {!inStock ? "Out of stock" : "Add to cart"}
          </Button>
        ) : (
          <Button>{!inStock ? "Out of stock" : "Add to cart"}</Button>
        )}
      </div>

      <div className="product-details-footer">
        <div className="product-cat w-100 text-truncate">
          <span>Category:</span>
          {/* {
                        product.category.map( ( cat, index ) => (
                            <span key={ index }>
                                <Link
                                    href={ { pathname: '/shop/sidebar/list', query: { category: cat.slug } } }
                                >{ cat.name }</Link>
                                { index < product.category.length - 1 ? ',' : '' }
                            </span>
                        ) )
                    } */}
        </div>

        <div className="social-icons social-icons-sm">
          <span className="social-label">Share:</span>
          <Link href="#" className="social-icon" title="Facebook">
            <i className="icon-facebook-f"></i>
          </Link>
          <Link href="#" className="social-icon" title="Twitter">
            <i className="icon-twitter"></i>
          </Link>
          <Link href="#" className="social-icon" title="Instagram">
            <i className="icon-instagram"></i>
          </Link>
          <Link href="#" className="social-icon" title="Pinterest">
            <i className="icon-pinterest"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductActions
