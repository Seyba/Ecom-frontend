import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner postition-relative p-3">
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

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
