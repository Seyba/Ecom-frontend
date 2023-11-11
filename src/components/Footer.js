import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'


export default function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" text-white bi bi-send" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                </svg>
                <h4 className="mb-0 text-white">Sign Up For Newsletter</h4>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control py-1" 
                  placeholder="Your Email" 
                  aria-label="Your Email" 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  SUBSCRIBE
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white">
                  Dev Shop <br/>
                  <p>No. 1259 Freedom, New York, 11111 
                  United States<br/></p>
                  <p>+91-987654321</p>
                  <p>devshop@devshop.com</p>
                </address>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link className="text-white py-1 mb-1">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link className="text-white py-1 mb-1">Refund Policy</Link>
                  </li>
                  <li>
                    <Link className="text-white py-1 mb-1">Shipping Policy</Link>
                  </li>
                  <li>
                    <Link className="text-white py-1 mb-1">Terms Of Service</Link>
                  </li>
                  <li>
                    <Link className="text-white py-1 mb-1">Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link className="text-white py-1 mb-1">Search</Link>
                  </li>
                  <li>
                    <Link className="text-white py-1 mb-1">About Us</Link>
                  </li>
                  <li>
                    <Link className="text-white py-1 mb-1">Faq</Link>
                  </li>
                  <li>
                    <Link className="text-white py-1 mb-1">Size Chart</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link className="text-white py-1 mb-1">Laptops</Link>
                  </li>
                  <li>
                    <Link className="text-white py-1 mb-1">Headphones</Link>
                  </li>
                  <li>
                    <Link className="text-white py-1 mb-1">Tablets</Link>
                  </li>
                  <li>
                    <Link className="text-white py-1 mb-1">Watch</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3"></footer>
      <footer className="py-3">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}; Powered by <Link className="text-white" to="/https://github.com/Seyba">SEYBA</Link>
            </p>
          </div>

        </div>
      </footer>
    </>
  )
}
