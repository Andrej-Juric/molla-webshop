import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductActions from "@modules/products/components/product-actions"
import React from "react"
import { Product } from "types/medusa"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <>
      <ProductActions product={product} />
    </>
  )
}

export default ProductInfo
