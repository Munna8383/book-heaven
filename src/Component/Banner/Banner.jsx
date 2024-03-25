import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="w-11/12 mx-auto mt-10 bg-gray-100 p-5 rounded-xl">

            <div  className="flex justify-around items-center ">
                <div className="space-y-10">

                    <h1 className="text-xl font-bold lg:text-3xl">Books To Freshen</h1>
                    <h1 className="text-xl font-bold lg:text-3xl">Up Your Bookshelf</h1>
                 <div>
                 <Link to={"/listedBooks"}> <button className="btn text-white btn-success">View The List</button></Link>
                 </div>

                </div>

                <div>
                    <img className="w-80 lg:w-full" src="https://i.ibb.co/ryD9HGb/pngwing-1.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;