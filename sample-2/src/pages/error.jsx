import React from 'react'
import { Link, Route } from 'react-router-dom'
import Profile from './Profile'
const error = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-black">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
              <div class="relative ">
                <h1 class="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
                  <span>4</span><span>0</span><span>4</span></h1>
                <span class="absolute  top-0   -ml-12  text-gray-300 font-semibold">Oops!</span>
              </div>
              <h5 class="text-gray-300 font-semibold -mr-10 -mt-3">Page not found</h5>
              <p class="text-gray-100 mt-2 mb-6">we are sorry, but the page you requested was not found</p>
              <Link to="/" relative='true'
                class="bg-green-400  px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg">
                  Got to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default error