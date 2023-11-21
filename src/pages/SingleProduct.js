import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'

export const SingleProduct = () => {
  return (
    <>
        <BreadCrumb title={"Product Name"}/>
        <Meta title="Product Name"/>
        <section className="main-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
