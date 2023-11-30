import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import { Container } from '../components/Container'
import { services } from '../utils/data'

export default function Home() {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
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
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((service, i) => {
                return(
                  <div className="d-flex align-items-center gap-15" key={i}>
                    <img src={service.img} alt="car"/>
                    <div className="subtitle">
                      <h6>{service.title}</h6>
                      <p className="mb-0">{service.tagline}</p>
                    </div>
                  </div>
                )
              })}
              
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  <h6>Laptops and Computers</h6>
                  <p>8 Items</p>
                </div>
                <img src="images/macbookSM.jpg" alt="computer"/>
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/smartSpeaker0830.jpg" alt="computer"/>
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
                <img src="images/cameraSM.jpg" alt="camera"/>
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>4 Items</p>
                </div>
                <img src="images/xboxConsole.jpg" alt="xBox"/>
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>Mobiles & Tablets</h6>
                  <p>5 Items</p>
                </div>
                <img src="images/samsungGalaxysm.jpg" alt="phones"/>
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>6 Items</p>
                </div>
                <img src="images/iphoneXR.jpg" alt="iphone"/>
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>Accessories</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tvApple.jpg" alt="monitor"/>
              </div>
              
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <div className="col-3">
            <ProductCard/>
          </div>
          <div className="col-3">
            <ProductCard/>
          </div>
          <div className="col-3">
            <ProductCard/>
          </div>
          <div className="col-3">
            <ProductCard/>
          </div>
        </div>  
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
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
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
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
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="col-3">
            <ProductCard/>
          </div>
          <div className="col-3">
            <ProductCard/>
          </div>
          <div className="col-3">
            <ProductCard/>
          </div>
          <div className="col-3">
            <ProductCard/>
          </div>
        </div>
      </Container>
      <Container class1="marquee-wrapper py-5">
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
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="col-3">
            <BlogCard/>
          </div>
          <div className="col-3">
            <BlogCard/>
          </div>
          <div className="col-3">
            <BlogCard/>
          </div>
          <div className="col-3">
            <BlogCard/>
          </div>
        </div>
      </Container>
    </>
  )
}
