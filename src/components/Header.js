import React from 'react'
import { NavLink, Link } from 'react-router-dom'

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
    </>
  )
}
