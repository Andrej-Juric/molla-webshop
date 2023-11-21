import { Order } from "@medusajs/medusa"
import Button from "@modules/common/components/button"
import Thumbnail from "@modules/products/components/thumbnail"
import { formatAmount } from "medusa-react"
import Link from "next/link"
import { useMemo } from "react"

type OrderCardProps = {
  order: Omit<Order, "beforeInsert">
}

const OrderCard = ({ order }: OrderCardProps) => {
  const numberOfLines = useMemo(() => {
    return order.items.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  }, [order])

  const numberOfProducts = useMemo(() => {
    return order.items.length
  }, [order])

  return (
    <div className="bg-white flex flex-col">
      <label className="text-xl-semi">#{order.display_id}</label>
      <div className="flex items-center divide-x divide-gray-200 text-small-regular text-gray-700">
        <label className="text-xl-semi">
          {new Date(order.created_at).toDateString()}
        </label>
        <label className="text-xl-semi">
          {formatAmount({
            amount: order.total,
            region: order.region,
            includeTaxes: false,
          })}
        </label>
        <label className="text-xl-semi">{`${numberOfLines} ${
          numberOfLines > 1 ? "items" : "item"
        }`}</label>
      </div>
      <div className="grid grid-cols-2 small:grid-cols-4 gap-4 my-4">
        {order.items.slice(0, 3).map((i) => {
          return (
            <div key={i.id} className="flex flex-col gap-y-2">
              <Thumbnail
                thumbnail={order.items[0].thumbnail}
                images={[]}
                size="small"
              />
              <div className="flex items-center text-small-regular text-gray-700">
                <label className="text-xl-semi">{i.title}</label>
                <label className="text-xl-semi">x</label>
                <label className="text-xl-semi">{i.quantity}</label>
              </div>
            </div>
          )
        })}
        {numberOfProducts > 4 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-small-regular text-gray-700">
              + {numberOfLines - 4}
            </span>
            <span className="text-small-regular text-gray-700">more</span>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <Link href={`/order/details/${order.id}`}>
          <Button variant="secondary">See details</Button>
        </Link>
      </div>
    </div>
  )
}

export default OrderCard
