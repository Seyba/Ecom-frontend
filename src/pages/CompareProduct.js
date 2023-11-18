import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

export const CompareProduct = () => {
  return (
    <>
        <Meta title={"Compare"}/>
        <BreadCrumb title="Compare" />
        <section className="compare-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg postion-absolute cross" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                            <div className="product-card-image">
                                <img src="/images/camera-1.jpg" alt="compare"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
