import { Popover, Transition } from "@headlessui/react"
import { useCartDropdown } from "@lib/context/cart-dropdown-context"
import { useStore } from "@lib/context/store-context"
import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items"
import Button from "@modules/common/components/button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import Trash from "@modules/common/icons/trash"
import Thumbnail from "@modules/products/components/thumbnail"
import { formatAmount, useCart } from "medusa-react"
import Link from "next/link"
import { Fragment } from "react"

const CartDropdown = () => {
  const { cart, totalItems } = useCart()
  const items = useEnrichedLineItems()
  const { deleteItem } = useStore()
  const { state, open, close } = useCartDropdown()

  return (
    <div
      className="dropdown cart-dropdown"
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <Popover className="relative h-full">
        <Popover.Button className="h-full">
          <Link href="/cart" className="dropdown-toggle">
            <i className="icon-shopping-cart"></i>
            <span className="cart-count">{totalItems}</span>
          </Link>
        </Popover.Button>
        <Transition
          show={state}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="hidden small:block absolute top-[calc(100%+1px)] right-0 bg-white border-x border-b border-gray-200 w-[382px] text-gray-900"
          >
            <div className="dropdown-menu dropdown-menu-right">
              {cart && items?.length ? (
                <>
                  <div className="dropdown-cart-products">
                    {items
                      .sort((a, b) => {
                        return a.created_at > b.created_at ? -1 : 1
                      })
                      .map((item) => (
                        <div
                          className="product justify-content-between"
                          key={item.id}
                        >
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <Link
                                href={`/products/${item.variant.product.handle}`}
                                legacyBehavior
                              >
                                {item.title}
                              </Link>
                            </h4>
                            {/* <LineItemOptions variant={item.variant} /> */}

                            <span className="cart-product-info">
                              <span className="cart-product-qty">
                                {item.quantity}
                              </span>
                              x $
                              <LineItemPrice region={cart.region} item={item} />
                            </span>
                          </div>

                          <div className="w-[122px]">
                            <Link
                              href={`/products/${item.variant.product.handle}`}
                              className="product-image"
                            >
                              <Thumbnail
                                thumbnail={item.thumbnail}
                                size="full"
                              />
                            </Link>
                          </div>

                          <button
                            className="btn-remove"
                            title="Remove Product"
                            onClick={() => deleteItem(item.id)}
                          >
                            <i className="icon-close"></i>
                          </button>
                        </div>
                      ))}
                  </div>

                  <div className="dropdown-cart-total">
                    <span>
                      Subtotal{" "}
                      <span className="font-normal">(excl. taxes)</span>
                    </span>
                    <span className="cart-total-price">
                      {formatAmount({
                        amount: cart.subtotal || 0,
                        region: cart.region,
                        includeTaxes: false,
                      })}
                    </span>
                  </div>
                  <div className="dropdown-cart-action">
                    <Link className="btn btn-primary" href="/cart" passHref>
                      View Cart
                    </Link>
                    <Link
                      className="btn btn-outline-primary-2"
                      href="/checkout"
                    >
                      <span>Checkout</span>
                      <i className="icon-long-arrow-right"></i>
                    </Link>
                  </div>
                </>
              ) : (
                <div>
                  <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                    <p>Your shopping bag is empty.</p>
                    <div>
                      <Link href="/store" className="btn btn-primary">
                        <>
                          <span className="sr-only">
                            Go to all products page
                          </span>
                          <button onClick={close}>Explore products</button>
                        </>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default CartDropdown
