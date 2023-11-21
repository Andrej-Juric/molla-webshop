"use client"

import { ProductProvider } from "@lib/context/product-context"
import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useProductCategories } from "medusa-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const StoreTemplate = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})
  const { product_categories } = useProductCategories()
  const searchParams = useSearchParams()

  const search: any = searchParams.get("category")

  useEffect(() => {
    if (search) {
      setParams({
        ...params,
        category_id: [search],
      })
    }
    console.log(search, "search")
  }, [])

  return (
    <main className="main shop">
      <div
        className="page-header text-center"
        style={{ backgroundImage: `url(images/page-header-bg.jpg)` }}
      >
        <div className="container">
          <h1 className="page-title">
            SHOP<span>products</span>
          </h1>
        </div>
      </div>
      <nav className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/store">Store</Link>
            </li>
            <li className="breadcrumb-item active">Shop</li>
          </ol>
        </div>
      </nav>
      <div className="page-content">
        <div className="container">
          <div className="row skeleton-body">
            <RefinementList
              params={params}
              setParams={setParams}
              product_categories={product_categories}
            />

            <InfiniteProducts params={params} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default StoreTemplate
