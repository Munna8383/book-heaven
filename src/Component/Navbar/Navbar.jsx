import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto">

<header className="p-4  dark:text-gray-800">
	<div className="container flex items-center justify-between">
		<h1 className="text-3xl font-extrabold hidden lg:block">Book Heaven</h1>
		<ul className=" gap-5 flex items-center justify-center">
			<li className="flex">
				<NavLink to={"/"}>Home</NavLink>
			</li>
			<li className="flex">
	<NavLink to={"/listedBooks"}>Listed Books</NavLink>
			</li>
			<li className="flex">
			<NavLink to={"/PageToRead"}>Page To Read</NavLink>
			</li>
			<li className="flex">
				Coming 
			</li>
			<li className="flex">
				Coming 
			</li>
		</ul>
		<div className="items-center flex-shrink-0 gap-3  hidden lg:flex">
        <button className="btn text-white btn-success">Sign IN</button>
        <button className="btn text-white btn-active btn-accent">Sign Up</button>
		</div>
		
	</div>
</header>
            
        </div>
    );
};

export default Navbar;