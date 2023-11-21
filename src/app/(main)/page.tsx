import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"
// import "../../../public/scss/style.scss"
import ShopByCategories from "@modules/home/components/categories-shop"
import RecentArrivals from "@modules/home/components/recent-arrivals"
import InfoText from "@modules/home/components/info-text"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
      <div className="main home-page skeleton-body">
        {/* <div className="mb-5"></div> */}
        <Hero />
        <div className="mb-5"></div>
        <FeaturedProducts />
        <ShopByCategories />
        <div className="mb-5"></div>
        <RecentArrivals />
        <InfoText />
      </div>
    </>
  )
}

export default Home
