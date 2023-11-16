import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

export default function OurStore() {
  return (
    <>
        <Meta title={"Our Store"}/>
        <BreadCrumb title="Our Store" />
        <div className="store-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Shop by Categories
                            </h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Filter By
                            </h3>
                            <div>
                                <h5 className="sub-title">Availability</h5>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" checked/>
                                    <label className="form-check-label" htmlFor="">
                                        In Stock (2)  
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" />
                                    <label className="form-check-label" htmlFor="">
                                        Out of Stock (0)
                                    </label>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating mb-3">
                                        
                                        <input 
                                            className="form-control py-1"
                                            type="number"
                                            name=""
                                            placeholder="From"
                                        />
                                        <label htmlFor="floatingInput1">From</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input 
                                            className="form-control py-1"
                                            type="number"
                                            name=""
                                            placeholder="To"
                                        />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                        
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Product Tags
                            </h3>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Random Product
                            </h3>
                        </div>
                    </div>
                    <div className="col-9">

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
