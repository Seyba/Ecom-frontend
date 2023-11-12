import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
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
                    <p>From $1699.00 or $64.62/mo.<br/> for 24 mo. Footnote*</p>
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
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>Special Sale</h5>
                    <p>From $999.00 or $41.62/mo.<br/> for 24 mo. Footnote*</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img 
                    src="images/small-banner-4.jpeg" 
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>Special Sale</h5>
                    <p>From $999.00 or $41.62/mo.<br/> for 24 mo. Footnote*</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}
