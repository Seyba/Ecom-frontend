import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'

export const RefundPolicy = () => {
  return (
    <>
        <BreadCrumb title={"Refund Policy"}/>
        <Meta title="Refund Policy"/>
        <section className="policy-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="policy"></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
