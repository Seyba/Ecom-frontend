import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'


export const TermsAndConditions = () => {
  return (
    <>
        <BreadCrumb title={"Terms and Conditions"}/>
        <Meta title="Terms and Conditions"/>
    </>
  )
}
