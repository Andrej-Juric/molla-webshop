import { Tab } from "@headlessui/react"
import { Product } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import clsx from "clsx"
import Link from "next/link"
import { useMemo } from "react"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = useMemo(() => {
    return [
      {
        label: "Description",
        component: <Description />,
      },
      {
        label: "Product Information",
        component: <ProductInfoTab product={product} />,
      },
      {
        label: "Shipping & Returns",
        component: <ShippingInfoTab />,
      },
      {
        label: "Reviews",
        component: <Reviews />,
      },
    ]
  }, [product])

  return (
    <Tab.Group>
      <div className="product-details-tab">
        <Tab.List className="nav nav-pills justify-content-center">
          {tabs.map((tab, i) => {
            return (
              <Tab
                key={i}
                className={({ selected }) =>
                  clsx("nav-item", {
                    selected,
                  })
                }
              >
                <span className="nav-link"> {tab.label}</span>
              </Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          <div className="tab-content">
            {tabs.map((tab, j) => {
              return <div key={j}>{tab.component}</div>
            })}
          </div>
        </Tab.Panels>
      </div>
    </Tab.Group>
  )
}

const Description = () => {
  return (
    <Tab.Panel className="tab-pane">
      <div className="product-desc-content">
        <h3>Product Information</h3>
        <p className="pb-1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
          nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
          nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus.{" "}
        </p>
        <ul>
          <li>
            Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.{" "}
          </li>
          <li>Vivamus finibus vel mauris ut vehicula.</li>
          <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
          nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
          nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus.{" "}
        </p>
      </div>
    </Tab.Panel>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <Tab.Panel className="tab-pane">
      <div className="product-desc-content">
        <div className="flex flex-col gap-y-4">
          <div>
            <h3 className="pt-2">Material</h3>
            <p className="pb-1">{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <h3>Country of origin</h3>
            <p className="pb-1">
              {product.origin_country ? product.origin_country : "-"}
            </p>
          </div>
          <div>
            <h3 className="pt-2">Type</h3>
            <p className="pb-1">{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <h3 className="pt-2">Weight</h3>
            <p className="pb-1">
              {product.weight ? `${product.weight} g` : "-"}
            </p>
          </div>
          <div>
            <h3 className="pt-2">Dimensions</h3>
            <p className="pb-1">
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
      {product.tags?.length ? (
        <div>
          <span className="font-semibold">Tags</span>
        </div>
      ) : null}
    </Tab.Panel>
  )
}

const ShippingInfoTab = () => {
  return (
    <Tab.Panel className="tab-pane">
      <div className="product-desc-content">
        <h3>Fast delivery</h3>
        <p className="pb-1">
          {/* <FastDelivery /> */}
          Your package will arrive in 3-5 business days at your pick up location
          or in the comfort of your home.
          <Link href="#">Delivery information</Link>
        </p>
        <br />
        <div className="product-desc-content">
          {/* <Refresh /> */}
          <h3>Simple exchanges</h3>
          <p className="pb-1">
            Is the fit not quite right? No worries - we&apos;ll exchange your
            product for a new one.
            <Link href="#">Exchange information</Link>
          </p>
        </div>
        <br />
        <div className="product-desc-content">
          {/* <Back /> */}
          <h3>Easy returns</h3>
          <p className="pb-1">
            Just return your product and we&apos;ll refund your money. No
            questions asked – we&apos;ll do our best to make sure your return is
            hassle-free.
            <Link href="#">Returns information</Link>
          </p>
        </div>
        <br />
      </div>
    </Tab.Panel>
  )
}

const Reviews = () => {
  return (
    <Tab.Panel className="tab-pane">
      <div className="reviews">
        <h3>Reviews (2)</h3>
        <div className="review">
          <div className="row no-gutters">
            <div className="col-auto">
              <h4>
                <Link href="#">Samanta J.</Link>
              </h4>

              <div className="ratings-container">
                <div className="ratings">
                  <div
                    className="ratings-val"
                    // style={{ width: product.ratings * 20 + "%" }}
                  ></div>
                  <span className="tooltip-text">
                    {/* {product.ratings.toFixed(2)} */}
                  </span>
                </div>
              </div>
              <span className="review-date mb-1">6 days ago</span>
            </div>
            <div className="col">
              <h4>Good, perfect size</h4>

              <div className="review-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus cum dolores assumenda asperiores facilis porro
                  reprehenderit animi culpa atque blanditiis commodi
                  perspiciatis doloremque, possimus, explicabo, autem fugit
                  beatae quae voluptas!
                </p>
              </div>

              <div className="review-action">
                <Link href="#">
                  <i className="icon-thumbs-up"></i>Helpful (2)
                </Link>
                <Link href="#">
                  <i className="icon-thumbs-down"></i>Unhelpful (0)
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="review">
          <div className="row no-gutters">
            <div className="col-auto">
              <h4>
                <Link href="#">John Doe</Link>
              </h4>

              <div className="ratings-container">
                <div className="ratings">
                  <div
                    className="ratings-val"
                    // style={{ width: product.ratings * 20 + "%" }}
                  ></div>
                  <span className="tooltip-text">
                    {/* {product.ratings.toFixed(2)} */}
                  </span>
                </div>
              </div>

              <span className="review-date mb-1">5 days ago</span>
            </div>

            <div className="col">
              <h4>Very good</h4>

              <div className="review-content">
                <p>
                  Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum
                  blanditiis laudantium iste amet. Cum non voluptate eos enim,
                  ab cumque nam, modi, quas iure illum repellendus, blanditiis
                  perspiciatis beatae!
                </p>
              </div>

              <div className="review-action">
                <Link href="#">
                  <i className="icon-thumbs-up"></i>Helpful (0)
                </Link>
                <Link href="#">
                  <i className="icon-thumbs-down"></i>Unhelpful (0)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reply">
        <div className="title-wrapper text-left">
          <h3 className="title title-simple text-left text-normal">
            Add a Review
          </h3>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <div className="rating-form">
          <label htmlFor="rating" className="text-dark">
            Your rating *{" "}
          </label>
          <span className="rating-stars selected">
            {/* {[1, 2, 3, 4, 5].map((num, index) => (
              <a
                className={`star-${num}`}
                href="#"
                onClick={setRating}
                key={"star-" + index}
              >
                {num}
              </a>
            ))} */}
          </span>

          <select
            name="rating"
            id="rating"
            // required=""
            style={{ display: "none" }}
          >
            <option value="">Rate…</option>
            <option value="5">Perfect</option>
            <option value="4">Good</option>
            <option value="3">Average</option>
            <option value="2">Not that bad</option>
            <option value="1">Very poor</option>
          </select>
        </div>
        <form action="#">
          <textarea
            id="reply-message"
            // cols="30"
            // rows="6"
            className="form-control mb-2"
            placeholder="Comment *"
            required
          ></textarea>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="reply-name"
                name="reply-name"
                placeholder="Name *"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                id="reply-email"
                name="reply-email"
                placeholder="Email *"
                required
              />
            </div>
          </div>
          <div className="form-checkbox d-flex align-items-start mb-2">
            <input
              type="checkbox"
              className="custom-checkbox"
              id="signin-remember"
              name="signin-remember"
            />
            <label
              className="form-control-label ml-3"
              htmlFor="signin-remember"
            >
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Tab.Panel>
  )
}

export default ProductTabs
