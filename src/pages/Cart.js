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
                        <div className="cart-data py-3 d-flex justify-content-between align-content-center ">
                            <div className="cart-col-1"></div>
                            <div className="cart-col-2"></div>
                            <div className="cart-col-3"></div>
                            <div className="cart-col-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
