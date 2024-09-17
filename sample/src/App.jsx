import Navbar from "./components/NavBar";
import SignIn from "./components/signin";

const App = () => {
    return (
        <>
            <div className="w-screen flex flex-col bg-green-300">
                <Navbar name = "Ponnarasu" />
                <SignIn />
            </div>
        </>
    )
}
export default App;