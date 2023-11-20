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
                    <div className="auth-card">
                        <h3>Login</h3>
                        <form className="d-flex flex-column gap-30" action="">
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
                            <div>
                                <Link to="/forgot-password">Forgot Your Password?</Link>
                            </div>
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className="button">Login</button>
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
