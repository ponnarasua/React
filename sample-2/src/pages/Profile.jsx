import Profilex from '../assets/profile.png'
const Profile = () => {
    return (
        <>
            <div className="h-full w-full flex justify-center items-center">
                <img src={Profilex} alt="profile" className="rounded-full h-40 w-40 my-[2%]"/>
                <div className="flex flex-col justify-center items-center mx-[2%]">
                    <h1 className="text-3xl font-bold">Ponnarasu A</h1>
                    <p className="text-lg">Full Stack Developer</p>
                    </div>
            </div>
        </>
    )
}
export default Profile