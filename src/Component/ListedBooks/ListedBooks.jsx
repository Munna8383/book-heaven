import { Link, Outlet } from "react-router-dom";
import {useState} from "react"


const ListedBooks = () => {
    const [tabIndex,SetTabIndex]= useState(0)
    return (
        <div className="w-11/12 mx-auto mt-10">
            <div className="bg-gray-100 py-5 text-center rounded-xl">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>
            <div className="dropdown dropdown-hover mt-5 flex justify-center">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Pages</a></li>
                </ul>
            </div>
            <div className="mt-5">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-right flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <Link to={""} onClick={()=>SetTabIndex(0)} rel="noopener noreferrer" href="#"  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===0?"border border-b-0":"border-b"} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>
                <Link to={"/listedBooks/wishList"} onClick={()=>SetTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===1?"border border-b-0":"border-b"} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>WishList Books</span>
                    </Link>
                </div>
            </div>

            <Outlet></Outlet>


        </div>
    );
};

export default ListedBooks;