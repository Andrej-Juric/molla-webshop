import { getProductsList } from "@lib/data"
import usePreviews from "@lib/hooks/use-previews"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import { StoreGetProductsParams } from "@medusajs/medusa"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useCart, useProducts } from "medusa-react"
import { useEffect, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useProductActions } from "@lib/context/product-context"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"

type InfiniteProductsType = {
  params: StoreGetProductsParams
}

const InfiniteProducts = ({ params }: InfiniteProductsType) => {
  const { cart } = useCart()
  const { products } = useProducts(params)
  console.log(products, "filter produkataaaaaaaa")

  // const { addToCart } = useProductActions()

  const { ref, inView } = useInView()

  const queryParams = useMemo(() => {
    const p: StoreGetProductsParams = {}

    if (cart?.id) {
      p.cart_id = cart.id
    }

    if (cart?.region?.currency_code) {
      p.currency_code = cart.region.currency_code
    }

    p.is_giftcard = false

    return {
      ...p,
      ...params,
    }
  }, [cart?.id, cart?.region, params])
  console.log(queryParams)

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      [`infinite-products-store`, queryParams, cart],
      ({ pageParam }) => getProductsList({ pageParam, queryParams }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    )

  const previews = usePreviews({ pages: data?.pages, region: cart?.region })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage])

  return (
    <div className="col-lg-9 skel-shop-products">
      <div className="toolbox">
        <div className="toolbox-left"></div>
        <div className="toolbox-info"></div>
        <div className="toolbox-right">
          <div className="toolbox-sort"></div>
          <div className="toolbox-layout"></div>
        </div>
      </div>
      <div className="product mb-3">
        <div className="row">
          {previews.map((p) => (
            <div className="col-6 col-md-4 col-lg-4" key={p.id}>
              <div className="product product-11 text-center">
                <ProductPreview {...p} />

                <div className="product-body">
                  <div className="product-cat"></div>
                  {p?.variants && (
                    <div className="product-action">
                      {p.variants.length >= 2 ? (
                        <Link
                          href={`/products/${p.handle}`}
                          className="btn-product btn-cart btn-select"
                        >
                          <span>select options</span>
                        </Link>
                      ) : (
                        p.variants.length === 1 && (
                          <button
                            className="btn-product btn-cart"
                            // onClick={addToCart}
                          >
                            <span>add to cart</span>
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {isLoading &&
            !previews.length &&
            repeat(8).map((index) => (
              <div key={index}>
                <SkeletonProductPreview />
              </div>
            ))}
          {isFetchingNextPage &&
            repeat(getNumberOfSkeletons(data?.pages)).map((index) => (
              <div key={index}>
                <SkeletonProductPreview />
              </div>
            ))}

          <div
            className="py-16 flex justify-center items-center text-small-regular text-gray-700"
            ref={ref}
          >
            <span ref={ref}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfiniteProducts
