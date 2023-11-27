import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'

export const Cart = () => {
  return (
    <>
        <BreadCrumb title={"Cart"}/>
        <Meta title="Cart"/>
        <section className="cart-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header py-3 d-flex justify-content-between align-content-center ">
                            <h4 className="cart-col-1">Product</h4>
                            <h4 className="cart-col-2">Price</h4>
                            <h4 className="cart-col-3">Quantity</h4>
                            <h4 className="cart-col-4">Total</h4>
                        </div>
                        <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center ">
                            <div className="cart-col-1 gap-15 d-flex align-items-center">
                                <div className="w-25">
                                    <img src="/images/appleWatchSeries2.jpg" className="img-fluid" alt="watch"/>
                                </div>
                                <div className="w-75">
                                    <p>Smart Watch with Advanced Health Monitoring, Fitness Tracking</p>
                                    <p>Color</p>
                                    <p>Size</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">$ 100</h5>  
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <div className="">
                                    <input 
                                        className="form-control"
                                        type="number"
                                        name=""
                                        id=""
                                        min={1}
                                        max={10}
                                    />
                                </div>
                                <div className="">
                                    <Link className="text-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                        </svg>
                                    </Link>
                                    
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <h5 className="price">$ 100</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <Link to='/product' className="button">Continue Shopping</Link>
                                <p>Order special instructions</p>
                                <textarea 
                                    className="form-control"
                                    name="intruction"
                                />
                            </div>
                            <div className="d-flex flex-colum align-items-end">
                                <h4>Subtotal</h4> $ 500.00
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link className="button">Check Out</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
