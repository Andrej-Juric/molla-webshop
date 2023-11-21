import { StoreGetProductsParams, ProductCategory } from "@medusajs/medusa"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useCollapse } from "react-collapsed"

type RefinementListProps = {
  params: StoreGetProductsParams
  setParams: (params: StoreGetProductsParams) => void
  product_categories: any
}

const RefinementList = ({
  product_categories,
  params,
  setParams,
}: RefinementListProps) => {
  const router = useRouter()
  const [isExpanded, setExpanded] = useState(true)
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
  })

  const handleCategoryChange = (categoryId: string) => {
    setParams({
      ...params,
      category_id: [categoryId],
    })

    router.replace(`/store?category=${categoryId}`)
  }

  return (
    <aside className="col-lg-3 skel-shop-sidebar">
      <div className="sticky-content">
        <div className="widget widget-clean">
          <h4>Filters:</h4>
        </div>
        <aside className="sidebar ">
          <div className="widget widget-collapsible">
            <h3
              {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
              })}
              className="widget-title mb-2"
            >
              {isExpanded ? "Category" : "Category"}
            </h3>
            <section {...getCollapseProps()}>
              <div className="widget-body pt-0">
                <div className="filter-items filter-items-count">
                  {product_categories?.map((category: ProductCategory) => (
                    <div className="filter-item" key={category.id}>
                      <div
                        className={
                          params.category_id?.includes(category.id)
                            ? "active"
                            : ""
                        }
                        onClick={() => handleCategoryChange(category.id)}
                      >
                        {!category.parent_category &&
                          category.name.toUpperCase()}

                        {/* {category && category.name.toUpperCase()} */}
                        <span className="item-count">{/* {todo} */}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </aside>
  )
}

export default RefinementList
