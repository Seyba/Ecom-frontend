import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

export default function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping over $100 & Free returns
              </p>
            </div>

            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline: <a className="text-white" href="tel: +18004305000">(800)4305000</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2><Link>DevShop </Link></h2>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                  <input 
                    type="text" 
                    className="form-control py-2" 
                    placeholder="Search Product here..." 
                    aria-label="Search Product here..." 
                    aria-describedby="basic-addon2"
                  />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6"/>
                </span>
              </div>
            </div>
            <div className="col-5">

            </div>
          </div>
        </div>
      </header>
    </>
  )
}
