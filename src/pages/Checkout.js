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
                                style={{"--bs-breadcrumb-divider":">"}}
                                aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="/">Home</a>
                                    </li>
                                    &nbsp;/
                                    <li className="breadcrumb-item active" aria-current="page">
                                        <a href="#">Library</a>
                                    </li>
                                </ol>
                            </nav>
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
