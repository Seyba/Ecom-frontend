import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'

export const PrivacyPolicy = () => {
  return (
    <>
        <BreadCrumb title={"Privacy Policy"}/>
        <Meta title="Privacy Policy"/>
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
