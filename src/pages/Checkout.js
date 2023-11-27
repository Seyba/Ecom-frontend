import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'

export const Checkout = () => {
  return (
    <>
        <BreadCrumb title={"Checkout"}/>
        <Meta title="Checkout"/>
        <section className="checkout-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3>DevShop</h3>
                            <nav
                                style={{"--bs-breadcrumb-divider": ">"}}
                                aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link className="text-dark" to="/cart" >Cart</Link>
                                    </li>
                                    &nbsp;/
                                    <li className="breadcrumb-item active" aria-current="page">
                                        <Link to="/">Information</Link>
                                    </li>
                                    &nbsp;/
                                    <li className="breadcrumb-item active" aria-current="page">
                                        <Link to="/shipping">Shipping</Link>
                                    </li>
                                    &nbsp;/
                                    <li className="breadcrumb-item active" aria-current="page">
                                        <Link to="/">Payment</Link>
                                    </li>
                                </ol>
                            </nav>
                            <h4 className="title">Contact Info</h4>
                            <p className="user-details">John Doe: (Johndoe@gmail.com)</p>
                            <form action="" className="d-flex flex-wrap gap-15 justify-content-between">
                                <div className="w-100">
                                    <select name="" id="" className="form-control form-select">
                                        <option value="" selected disabled>Select Country</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input 
                                        className="form-control"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <input 
                                        className="form-control"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div className="w-100">
                                    <input 
                                        className="form-control"
                                        type="text"
                                        placeholder="Address"
                                    />
                                </div>
                                <div className="w-100">
                                    <input 
                                        className="form-control"
                                        type="text"
                                        placeholder="Apartment, Suite etc"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <input 
                                        className="form-control"
                                        type="text"
                                        placeholder="City"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <select name="" id="" className="form-control form-select">
                                        <option value="" selected disabled>Select State</option>
                                    </select>
                                </div>
                                <div>
                                    <input 
                                        className="form-control"
                                        type="number"
                                        placeholder="Zip Code"
                                    />
                                </div>
                                <div className="w-100 d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                        <Link className="text-dark px-2" to="/cart">Return to Cart</Link>
                                    </div>
                                    <div>
                                        <Link to="/cart" className="button">
                                            Continue to Shipping
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
