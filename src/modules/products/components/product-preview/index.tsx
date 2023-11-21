import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <>
      <Link href={`/products/${handle}`}>
        <figure className="product-media">
          <Thumbnail thumbnail={thumbnail} size="full" />
        </figure>
      </Link>
      <div className="">
        {/* <div className="product-cat"></div> */}
        <h3 className="product-title">
          <Link href={`/products/${handle}`}>{title}</Link>
        </h3>
        <div className="product-price">
          {price ? (
            <>
              {price.price_type === "sale" && (
                <span className="old-price">{price.original_price}</span>
              )}
              <span
                className={clsx("font-semibold", {
                  "new-price": price.price_type === "sale",
                })}
              >
                {price.calculated_price}
              </span>
            </>
          ) : (
            <div className="product-price"></div>
          )}
        </div>
        <div className="ratings-container">
          <div className="ratings">
            <div className="ratings-val"></div>
            <span className="tooltip-text"></span>
          </div>
          <span className="ratings-text">( Reviews )</span>
        </div>
      </div>
    </>
  )
}

export default ProductPreview
