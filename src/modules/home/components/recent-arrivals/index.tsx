"use client"
import { ProductProvider } from "@lib/context/product-context"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import ProductPreview from "@modules/products/components/product-preview"
import React from "react"
import { TabPanel, Tabs } from "react-tabs"
import RecentArrivalsCard from "../recent-card"

export default function RecentArrivals() {
  const { data } = useFeaturedProductsQuery(8)
  console.log(data, "recent arrivals data")
  return (
    <Tabs defaultIndex={0} selectedTabClassName="show">
      <div className="container trendy-collection">
        <div className="heading heading-center mb-3">
          <h2 className="title-lg">Recent Arrivals</h2>
        </div>
      </div>

      <div className="container">
        <TabPanel>
          <div className="row">
            {data?.map((p, index): any => (
              <ProductProvider product={p}>
                <RecentArrivalsCard p={p} />
              </ProductProvider>
            ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  )
}
