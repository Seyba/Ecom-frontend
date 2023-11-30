import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import { Container } from '../components/Container'
import { CustomInput } from '../components/CustomInput'

export const Login = () => {
  return (
    <>
        <BreadCrumb title={"Login"}/>
        <Meta title="Login"/>
        <Container class1="login-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3>Login</h3>
                        <form className="d-flex flex-column gap-30" action="">
                            <CustomInput type="email" name="email" placeholder="Email"/>
                            <CustomInput type="password" name="password" placeholder="password"/>
                            <CustomInput type="password" name="password" placeholder="password"/>
                            <div>
                                <Link to="/forgot-password">Forgot Your Password?</Link>
                            </div>
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className="button">Login</button>
                                <Link to="/signup" className="button signup">Signup</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}
