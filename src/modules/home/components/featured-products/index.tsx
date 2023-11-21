"use client"

import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { TabPanel, Tabs } from "react-tabs"
import { ProductProvider } from "@lib/context/product-context"
import ProductCard from "../product-card"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery(4)

  return (
    <Tabs defaultIndex={0} selectedTabClassName="show">
      <div className="container trendy-collection">
        <div className="heading heading-center mb-3">
          <h2 className="title-lg">Trendy Products</h2>
        </div>
      </div>

      <div className="container">
        <TabPanel>
          <div className="row">
            {data?.map((p, index): any => (
              <ProductProvider product={p}>
                <ProductCard p={p} />
              </ProductProvider>
            ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  )
}

export default FeaturedProducts
