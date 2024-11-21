import React from 'react'
import { Outlet } from 'react-router-dom'


import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ScrollToTop from './components/ScrollToTop';



function AppOutlet() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppOutlet