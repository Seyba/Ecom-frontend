import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'

export const Signup = () => {
  return (
    <>
        <BreadCrumb title={"Signup"}/>
        <Meta title="Signup"/>
        <section className="login-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3>Create Account</h3>
                            <form className="d-flex flex-column gap-30" action="">
                                <div >
                                    <input 
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="form-control"
                                    />
                                </div>
                                <div >
                                    <input 
                                        type="tel"
                                        name="mobile"
                                        placeholder="Mobile Number"
                                        className="form-control"
                                    />
                                </div>
                                <div >
                                    <input 
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mt-1">
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="form-control"
                                    />
                                </div>
                                
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button">Create</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
