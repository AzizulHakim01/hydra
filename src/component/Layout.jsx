import React from 'react'
import Header from './Header'
import HeaderTop from './HeaderTop'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <HeaderTop/>
        <hr />
        <Header/>
        <hr />
        {children}
        <Footer/>
    </>
  )
}

export default Layout