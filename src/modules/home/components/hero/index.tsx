import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  // return (
  //   <div className="h-[90vh] w-full relative">
  //     <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
  //       <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
  //         Introducing the Latest Summer Styles
  //       </h1>
  //       <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
  //         This season, our new summer collection embraces designs to provide
  //         comfort and style - ensuring you&apos;re well-prepared for whatever
  //         comes your way.
  //       </p>
  //       <UnderlineLink href="/store">Explore products</UnderlineLink>
  //     </div>
  //     <Image
  //       src="/hero.webp"
  //       loading="eager"
  //       priority={true}
  //       quality={90}
  //       alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
  //       className="absolute inset-0"
  //       draggable="false"
  //       fill
  //       sizes="100vw"
  //       style={{
  //         objectFit: "cover",
  //       }}
  //     />
  //   </div>
  // )
  return (
    <div
      className="intro-section pt-5 pb-4"
      style={{ backgroundImage: "url(images/home/sliders/intro-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="intro-slider-container slider-container-ratio slider-container-1 mb-2 mb-lg-0">
              <div className="intro-slider intro-slider-1 owl-simple owl-light owl-nav-inside">
                <div
                  className="intro-slide"
                  style={{
                    backgroundColor: "#C29763",
                    backgroundImage: "url(images/home/sliders/slide-1-1.png)",
                  }}
                >
                  <figure className="slide-image mb-0">
                    {/* neka fotka */}
                  </figure>

                  <div className="intro-content">
                    <h3 className="intro-subtitle">Topsale Collection</h3>
                    <h1 className="intro-title">
                      Best clothes
                      <br />
                      Collection
                    </h1>
                    <Link href="/store" className="btn btn-outline-white">
                      <span>SHOP NOW</span>
                      <i className="icon-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="intro-banners">
              <div className="row row-sm">
                <div className="col-md-6 col-lg-12">
                  <div className="banner lazy-media">
                    <div
                      className="lazy-overlay"
                      style={{ backgroundColor: "rgb(243, 235, 218)" }}
                    ></div>

                    <img
                      alt="banner"
                      src="images/home/banners/intro/banner-1.jpg"
                      width="370"
                      height="auto"
                    />

                    <div className="banner-content">
                      <h4 className="banner-subtitle">Clearence</h4>

                      <h3 className="banner-title">
                        <Link href="#">
                          Chairs & Chaises
                          <br />
                          Up to 40% off
                        </Link>
                      </h3>

                      <Link href="/shop/sidebar/3cols" className="banner-link">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-12">
                  <div className="banner lazy-media">
                    <div
                      className="lazy-overlay"
                      style={{ backgroundColor: "rgb(229, 231, 218)" }}
                    ></div>

                    <img
                      alt="banner"
                      src="images/home/banners/intro/banner-2.jpg"
                      width="370"
                      height="auto"
                    />

                    <div className="banner-content">
                      <h4 className="banner-subtitle">New in</h4>

                      <h3 className="banner-title">
                        <Link href="#">
                          Kitchen & Dinning
                          <br />
                          Collection
                        </Link>
                      </h3>

                      <Link href="/shop/sidebar/3cols" className="banner-link">
                        Discover Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className="intro-slide"
              style={{
                backgroundColor: "#9AC5CB",
                backgroundImage: "url(images/home/sliders/slide-2-1.png)",
              }}
            >
              <figure className="slide-image mb-0"></figure>

              <div className="intro-content">
                <div>
                  <h3 className="intro-subtitle">Topsale Collection</h3>

                  <h1 className="intro-title">
                    Wood Cabinet
                    <br />
                    Collection
                  </h1>

                  <Link
                    href="/shop/sidebar/list"
                    className="btn btn-outline-white"
                  >
                    <span>SHOP NOW</span>
                    <i className="icon-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="mb-3"></div>
        <div className="mb-6"></div>
      </div>
    </div>
  )
}

export default Hero
