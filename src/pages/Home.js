import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'

export default function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img 
                  src="images/ecom-banner-img.jpeg" 
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Special Sale</h5>
                  <p>From $999.00 or $41.62/mo.<br/> for 24 mo. Footnote*</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img 
                    src="images/small-banner-1.jpeg" 
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>From $1699.00 <br/>or $64.62/mo. </p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img 
                    src="images/small-banner-2.jpeg" 
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>From $599 or $49.91/mo.<br/> for 12 mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img 
                    src="images/small-banner-3.jpeg" 
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest band <br /> colors and styles.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img 
                    src="images/small-banner-4.jpeg" 
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>High-fidelity playback & <br/> ultra-low distortion.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                  </svg>
                  <div className="subtitle">
                    <h6>Free Shipping </h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-gift" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                  </svg>
                  <div className="subtitle">
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up 25%</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                  </svg>
                  <div className="subtitle">
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-tag" viewBox="0 0 16 16">
                    <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
                    <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>
                  </svg>
                  <div className="subtitle">
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Direct Price</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                  </svg>
                  <div className="subtitle">
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Laptops and Computers</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/macbook.jpg" alt="computer"/>
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/smartSpeaker.jpg" alt="computer"/>
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Television</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="computer"/>
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>13 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>4 Items</p>
                  </div>
                  <img src="images/xBox.jpg" alt="xBox"/>
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Mobiles & Tablets</h6>
                    <p>5 Items</p>
                  </div>
                  <img src="images/samsungGalaxy.jpg" alt="phones"/>
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="images/iphone11.jpg" alt="iphone"/>
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/monitor.jpg" alt="monitor"/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="/images/appleWatchSeries7.jpg" className="img-fluid" alt="watch"/>
                <div className="famous-content position-absolute">
                  <h5>BIG SCREEN</h5>
                  <h6>Smart Watch Series 7 </h6>
                  <p>From $399 or $16.62/mo for 24 mo*</p>
                </div>
              </div>
              
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="/images/macbookPro.jpg" className="img-fluid" alt="watch"/>
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">STUDIO DISPLAY</h5>
                  <h6 className="text-dark">600 nits of brightness.</h6>
                  <p className="text-dark">27-inch 5k Retina display</p>
                </div>
              </div>
              
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="/images/iphoneProMax.jpg" className="img-fluid" alt="watch"/>
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">SMARTPHONES</h5>
                  <h6 className="text-dark">Smartphone 13 Pro.</h6>
                  <p className="text-dark">Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*</p>
                </div>
              </div>
              
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="/images/soundBoxes.jpg" className="img-fluid" alt="watch"/>
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">HOME SPEAKERS</h5>
                  <h6 className="text-dark">Room-filling Sound.</h6>
                  <p className="text-dark">From $699 or $116.58/mo for 12 mo.*</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <div className="row">
              <SpecialProduct/>
              <SpecialProduct/>
              <SpecialProduct/>
              <SpecialProduct/>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <Marquee className="d-flex">
                  <div className="mx-4 w-15">
                    <img src="/images/canon.png" alt="brand"/>
                  </div>
                  <div className="mx-4 w-15">
                    <img src="/images/dell.png" alt="brand"/>
                  </div>
                  <div className="mx-4 w-15">
                    <img src="/images/sony.png" alt="brand"/>
                  </div>
                  <div className="mx-4 w-15">
                    <img src="/images/apple.png" alt="brand"/>
                  </div>
                  <div className="mx-4 w-15">
                    <img src="/images/sanDisk.png" alt="brand"/>
                  </div>
                  <div className="mx-4 w-15">
                    <img src="/images/samsung.png" alt="brand"/>
                  </div>
                  <div className="mx-4 w-15">
                    <img src="/images/intel.png" alt="brand"/>
                  </div>
                  <div className="mx-4 w-15">
                    <img src="/images/bose.png" alt="brand"/>
                  </div>
                  <div className="mx-4 w-15">
                    <img src="/images/lg.png" alt="brand"/>
                  </div>
                </Marquee>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </section>
    </>
  )
}
