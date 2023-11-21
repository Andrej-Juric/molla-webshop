import { useStore } from "@lib/context/store-context"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { LineItem, Region } from "@medusajs/medusa"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import NativeSelect from "@modules/common/components/native-select"
import Trash from "@modules/common/icons/trash"
import Thumbnail from "@modules/products/components/thumbnail"
import { useCart } from "medusa-react"
import Link from "next/link"

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
}

const Item = ({ item, region }: ItemProps) => {
  const { updateItem, deleteItem } = useStore()

  console.log(item, "item")

  const { cart } = useCart()
  console.log(cart, "CART")
  return (
    <tr>
      <td className="product-col">
        <div className="product">
          <figure className="product-media">
            <Link
              className="product-image"
              href={`/products/${item.variant.product.handle}`}
            >
              <Thumbnail thumbnail={item.thumbnail} size="full" />
            </Link>
          </figure>

          <h4 className="product-title">
            <Link href={`/products/${item.variant.product.handle}`}>
              {item.title}
            </Link>
          </h4>
        </div>
      </td>

      <td className="price-col" style={{ paddingTop: 30 }}>
        ${item.original_total}
      </td>

      <td className="quantity-col" style={{ paddingTop: 30 }}>
        <NativeSelect
          value={item.quantity}
          onChange={(value) =>
            updateItem({
              lineId: item.id,
              quantity: parseInt(value.target.value),
            })
          }
          className="cart-product-quantity"
        >
          {Array.from(
            [
              ...Array(
                item.variant.inventory_quantity > 0
                  ? item.variant.inventory_quantity
                  : 10
              ),
            ].keys()
          )
            .slice(0, 10)
            .map((i) => {
              const value = i + 1
              return (
                <option value={value} key={i}>
                  {value}
                </option>
              )
            })}
        </NativeSelect>
      </td>

      <td className="total-col" style={{ paddingTop: 30 }}>
        <LineItemPrice item={item} region={region} />
      </td>
      <td className="remove-col" style={{ paddingTop: 30 }}>
        <button className="btn-remove" onClick={() => deleteItem(item.id)}>
          <i className="icon-close"></i>
        </button>
      </td>
    </tr>
  )
}

export default Item
