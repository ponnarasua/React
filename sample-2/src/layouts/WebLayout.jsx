import React, { Suspense } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const WebLayout = () => {
    const isloggedin = true

    return (
        <>
            <Navbar />
            {isloggedin ? (
                <Suspense fallback={"loading"}>
                    <Outlet />
                </Suspense>
            ) : (
                <>
                    Login to access data
                </>
            )}
            <Footer />
            
        </>
    )
}

export default WebLayout