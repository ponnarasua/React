import { Cross, User2, User2Icon, CircleX } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navlist = [{
        title: "About",
        path: "/"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Contact",
        path: "/contact"
    }
    ]
    const emailref = useRef(null)
    const passwordref = useRef(null)
    const handleLogin = (e) => {
        e.preventDefault()
        setvisible(false)
        nav('/contact')
        console.log(emailref.current.value, passwordref.current.value)
    }

    const [visible, setvisible] = useState(false)
    return (
        <>
            <div className="w-full h-[4rem] flex justify-center items-center bg-slate-500 shadow-md shadow-slate-900 sticky top-0">
                <div className="w-[80%] h-full flex justify-center items-center flex-row">
                    <div className='w-1/2 flex h-full justify-start items-center font-bold text-xl text-white '>Portfolio</div>
                    <div className='w-1/2 flex  h-full justify-end items-center'>
                        <ul className='w-full list-none flex flex-row justify-center gap-6'>
                            {navlist.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={item.path} className='text-white '>{item.title}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                        <User2 className='cursor-pointer h-10 w-10 text-black rounded-3xl border-2 border-white hover:bg-slate-500  hover:border-black hover:text-white hover:bg-slate-500' onClick={() => setvisible(true)} />
                    </div>
                </div>

            </div>
            {
                visible && (
                    <>
                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50 ">
                            <div className=" h-[40%] w-[30%] rounded-2xl bg-red z-50 flex flex-col  bg-white  shadow-lg">
                                <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-black bg-white text-xl font-bold shadow-sm rounded-2xl">
                                    <div className="w-1/2">
                                        Login
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer" onClick={() => setvisible(!visible)} >
                                            <input type="checkbox" value="" className="sr-only peer" />
                                            <CircleX className="peer ring-0 bg-slate-500  rounded-full outline-none duration-300 after:duration-500 w-8 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0" />
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleLogin}>
                                        <input type="email" ref={emailref} name="" id="email" placeholder="Email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-b-2 hover:border-slate-200  focus:border-slate-60" required />
                                        <input type="password" ref={passwordref} name="" id="password" placeholder="Password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-slate-200 focus:border-slate-600 mb-3" required />
                                        <button type="submit" className="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80 font-medium rounded-sm text-md px-5 py-2.5 text-center w-full h-[15%] mt-4">   Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </>
                )
            }
        </>
    )
}

export default Navbar