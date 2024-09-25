import { Cross, User2, User2Icon, CircleX } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

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
    const navigate = useNavigate(); // Add this line to define the navigate function
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = emailref.current.value;
        const password = passwordref.current.value;

        try {
            const response = await axios.get(`https://66f3a95477b5e88970964664.mockapi.io/users`);
            const user = response.data.find(u => u.email === email); // Find the user by email

            if (user) {
                if (user.password === password) {
                    if (user.role === 'admin') {
                        alert('Welcome Admin');
                        setvisible(false);
                        navigate('/admin');
                    } else {
                        alert('Login Successful');
                        setvisible(false);
                        navigate('/contact'); 
                    }
                } else {
                    alert('Incorrect Password');
                }
            } else {
                const newUser = {
                    email,
                    password,
                    role: 'user'
                };
                await axios.post('https://66f3a95477b5e88970964664.mockapi.io/users', newUser);
                alert('User Created and Logged In');
                setvisible(false);
                navigate('/contact'); 
            }
        } catch (error) {
            console.error('There was an error logging in!', error);
        }
    };
    const [visible, setvisible] = useState(false)
    return (
        <>
            <div className="w-full h-[4rem] flex justify-center items-center z-0 bg-gradient-to-r from-neutral-700 to-neutral-950 shadow-md shadow-black sticky top-0">
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
                        <User2 className='cursor-pointer h-10 w-10 text-white rounded-3xl border-2 border-white hover:bg-black  hover:border-zinc-600 hover:text-white hover:bg-black' onClick={() => setvisible(true)} />
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
                                            <CircleX className="peer ring-0 rounded-full outline-none duration-300 after:duration-500 w-8 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0" />
                                        </label>
                                    </div>
                                </div>
                                <p className='text-red-600 font-bold text-justify mx-7 my-2'>*Note: This is Admin Login*</p>
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleLogin}>
                                        <input type="email" ref={emailref} name="" id="email" placeholder="Email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-b-2 hover:border-blabg-black  focus:border-black required" />
                                        <input type="password" ref={passwordref} name="" id="password" placeholder="Password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-blabg-black focus:border-blabg-black mb-3" required />
                                        <button class="bg-gradient-to-r from-neutral-700 to-neutral-950 rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition hover:shadow-3xl">Submit</button>
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