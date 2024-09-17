const SignIn = () => {
    return (
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-purple-500">
                <form className="w-1/6 h-3/6 flex flex-col items-center justify-center rounded-xl bg-slate-200 p-2.5 m-2.5">
                    <input type="text" className="border border-solid border-purple-500 p-3 m-3 w-4/6 rounded-xl" placeholder="Name" />
                    <input type="email" className="border border-solid border-purple-500 p-3 m-3 w-4/6 rounded-xl" placeholder="Email" />
                    <input type="tel" className="border border-solid border-purple-500 p-3 m-3 w-4/6 rounded-xl" placeholder="Phone" />
                    <input type="number" className="border border-solid border-purple-500 p-3 m-3 w-4/6 rounded-xl" placeholder="Age" />
                    <input type="text" className="border border-solid border-purple-500 p-3 m-3 w-4/6 rounded-xl" placeholder="Password" />
                    <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">SIGN IN</button>
                </form>
            </div>
    );
}
export default SignIn;