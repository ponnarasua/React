import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <>
            <div className='w-full h-full justify-center items-center flex-col'>
                <div className='flex justify-center items-center h-full m-2 flex-col'>
                    <h1 className='text-3xl font-bold text-neutral-700 text-center m-6'>Welcome Master !</h1>
                    <div className='flex flex-wrap flex-row'>
                        <Link to="/projectedit">
                            <button className="bg-gradient-to-r from-neutral-700 to-neutral-950 rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition hover:shadow-3xl m-6">
                                Project Control
                            </button>
                        </Link>
                    </div>
                    <h1 className='m-6'>We will done more soon master</h1>
                </div>
            </div>
        </>
    )
}

export default Admin