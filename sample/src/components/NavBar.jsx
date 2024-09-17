const Navbar = (props) => {
  return (
    <>
    <div className="w-screen h-10 flex justify-center">
        <nav><h1>Hi {props.name}</h1></nav>
        </div>
    </>
  );
};
export default Navbar;