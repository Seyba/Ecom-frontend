import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <>
      <Meta title={"Contact"}/>
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/place/Bronx+Community+College/@40.8554443,-73.9167098,16.48z/data=!4m6!3m5!1s0x89e82bb78bd39dfb:0x610e64c3e71026e3!8m2!3d40.8575158!4d-73.9129286!16zL20vMDR3d3Nr?hl=en-US&entry=ttu"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >

              </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact </h3>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                  </div>
                  <div className="mb-3">
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number"/>
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comment" rows="4"></textarea>
                  </div>
                  <Link className="button">
                    Send 
                  </Link>
                </div>
                <div>
                  <h3 className="contact-title">Get In Touch With Us</h3>
                  <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                  </svg>
                    33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
