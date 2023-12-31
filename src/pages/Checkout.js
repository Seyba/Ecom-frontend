import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import { Container } from '../components/Container'

export const Checkout = () => {
  return (
    <>
        <BreadCrumb title={"Checkout"}/>
        <Meta title="Checkout"/>
        <Container class1="checkout-wrapper py-5 home-wrapper-2">
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
                                    <Link className="total-price" to="/">Information</Link>
                                </li>
                                &nbsp;/
                                <li className="breadcrumb-item active" aria-current="page">
                                    <Link className="total-price" to="/shipping">Shipping</Link>
                                </li>
                                &nbsp;/
                                <li className="breadcrumb-item active" aria-current="page">
                                    <Link className="total-price" to="/">Payment</Link>
                                </li>
                            </ol>
                        </nav>
                        <h4 className="title total">Contact Info</h4>
                        <p className="user-details total">John Doe: (Johndoe@gmail.com)</p>
                        <h4 className="mb-3">Shipping Address</h4>
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
                    <div className="light-border-bottom py-4">
                        <div className="d-flex gap-10 align-items-center">
                            <div className="w-75 d-flex mb-2 gap-10">
                                <div className="w-25 position-relative">
                                    <span 
                                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                        style={{top: '-10px', right: '1px'}}
                                    >
                                        1
                                    </span>
                                    <img src="/images/appleWatchSeries2.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div>
                                    <h5 className="total-price">title</h5>
                                    <p className="total-price">Apple Watch Series 7</p>
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <h5 className="total-price price-padding">$ 500</h5>
                            </div>
                        </div>
                    </div>
                    <div className="light-border-bottom py-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="total">Subtotal</p>
                            <p className="total-price">$ 400</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="total mb-0">Shipping</p>
                            <p className="total-price mb-0">$ 20</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center  py-4">
                        <h4 className="total">Total</h4>
                        <h5 className="total-price">$ 660</h5>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}
