import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

export const Wishlist = () => {
  return (
    <>
        <BreadCrumb title={"Wishlist"}/>
        <Meta title="Wishlist"/>
        <section className="wishlist-wrapper home-wrapper-2 py-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <div className="cross position-absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                            </div>
                            <div className="wishlist-card-image">
                                <img src="/images/appleWatch-1.jpg" className="img-fluid w-100" alt="watch"/>
                            </div>
                            <div className="py-3 px-3">
                                <h5 className="title">Milanese Loop Watch Band For 42mm/44mm Apple Watch</h5>
                                <h6 className="price">$270.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <div className="cross position-absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                            </div>
                            <div className="wishlist-card-image">
                                <img src="/images/headphonebt.jpg" className="img-fluid w-100" alt="watch"/>
                            </div>
                            <div className="py-3 px-3">
                                <h5 className="title">Milanese Loop Watch Band For 42mm/44mm Apple Watch</h5>
                                <h6 className="price">$270.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <div className="cross position-absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                            </div>
                            <div className="wishlist-card-image">
                                <img src="/images/appleWatchSeries2Pink.jpg" className="img-fluid w-100" alt="watch"/>
                            </div>
                            <div className="py-3 px-3">
                                <h5 className="title">Milanese Loop Watch Band For 42mm/44mm Apple Watch</h5>
                                <h6 className="price">$270.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <div className="cross position-absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                            </div>
                            <div className="wishlist-card-image">
                                <img src="/images/appleWatchSeries2.jpg" className="img-fluid w-100" alt="watch"/>
                            </div>
                            <div className="py-3 px-3">
                                <h5 className="title">Milanese Loop Watch Band For 42mm/44mm Apple Watch</h5>
                                <h6 className="price">$270.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
