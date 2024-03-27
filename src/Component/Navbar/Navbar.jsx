import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto">

<header className="p-4  dark:text-gray-800">
	<div className="container flex items-center justify-between">
		<h1 className="text-3xl font-extrabold hidden lg:block">Book Heaven</h1>
		<ul className=" gap-5 flex flex-wrap items-center justify-center">
			<li className="flex">
				<NavLink to={"/"}  className={({isActive})=>isActive?"text-green-500 border-2 rounded-xl border-green-500 p-1":" "}>Home</NavLink>
			</li>
			<li className="flex">
	<NavLink to={"/listedBooks"} className={({isActive})=>isActive?"text-green-500 border-2 rounded-xl border-green-500 p-1":" "}>Listed Books</NavLink>
			</li>
			<li className="flex">
			<NavLink to={"/PageToRead"}  className={({isActive})=>isActive?"text-green-500 rounded-xl border-2 border-green-500 p-1":" "}>Page To Read</NavLink>
			</li>
			<li className="flex">
			<NavLink to={"/upcoming"}  className={({isActive})=>isActive?"text-green-500 rounded-xl border-2 border-green-500 p-1":" "}>Upcoming</NavLink>
			</li>
			<li className="flex">
			<NavLink to={"/payment"}  className={({isActive})=>isActive?"text-green-500 rounded-xl border-2 border-green-500 p-1":" "}>Payment</NavLink>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 gap-3  hidden lg:flex">
        <button className="btn text-white btn-success">Sign In</button>
        <button className="btn text-white btn-active btn-accent">Sign Up</button>
		</div>
		
	</div>
</header>
            
        </div>
    );
};

export default Navbar;