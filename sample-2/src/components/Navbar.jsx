import { User2, User2Icon } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    const navlist = [{
        title: "Profile",
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
    return (
        <>
            <div className="w-full h-[4rem] flex justify-center items-center bg-slate-500 shadow-md shadow-slate-900 rounded-sm">
                <div className="w-[80%] h-full flex justify-center items-center flex-row">
                    <div className='w-1/2 flex h-full justify-start items-center font-bold text-xl text-white'>Ponnarasu A</div>
                    <div className='w-1/2 flex  h-full justify-end items-center'>
                        <ul className='w-full list-none flex flex-row justify-center gap-6'>
                            {navlist.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={item.path} className='text-white hover:text-slate-400'>{item.title}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                        <User2Icon className='h-9 w-9 text-white rounded-full border-2 border-white' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar