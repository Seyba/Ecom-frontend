import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'

export const Login = () => {
  return (
    <>
        <BreadCrumb title={"Wishlist"}/>
        <Meta title="Wishlist"/>
        <section className="login-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3>Login</h3>
                        <form action="">
                            <div>
                                <input 
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="form-control"
                                />
                            </div>
                            <div>
                                <input 
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="form-control"
                                />
                            </div>
                            <div>
                                <Link to="/forgot-password">Forgot Password</Link>
                            </div>
                            <div className="d-flex justify-content-center gap-15 align-items-center">
                                <button className="button">Forgot Password</button>
                                <Link className="button signup">Signup</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
