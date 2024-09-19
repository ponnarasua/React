import React, { Suspense } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
    const isloggedin = true

    return (
        <>
            <Navbar />
            {isloggedin ? (
                <Suspense fallback={"loading"}>
                    <Outlet />
                </Suspense>

            ) :
                (
                    <>
                        Login to access data
                    </>
                )

            }
        </>
    )
}

export default WebLayout