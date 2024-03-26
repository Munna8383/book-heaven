/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { MdContactPage } from "react-icons/md";
import { FaBook } from "react-icons/fa";

const SingleWishlist = ({wish}) => {

    const {image,bookName,author,tags,yearOfPublishing,publisher,category,rating,totalPages}=wish
    return (
        <div>

<div className="flex flex-col lg:flex-row justify-around border-gray-500 border rounded xl items-center p-5">

<div className=" bg-gray-100 px-20 py-5 rounded-xl">
    <img width={200} height={200} src={image} alt="" />
</div>

<div className="space-y-6">
    <div>
        <h1 className="text-3xl font-bold">{bookName}</h1>
    </div>
    <div>
        <h1 className="font-semibold">By: {author}</h1>
    </div>

    <div className="flex gap-5 items-center">
        <div className="flex gap-4 items-center">
            <h1 className="font-bold">Tags</h1>
            <h1 className="bg-gray-100 p-2 text-green-500 rounded-xl">#{tags[0]}</h1>
            <h1  className="bg-gray-100 p-2 text-green-500 rounded-xl">#{tags[1]}</h1>
        </div>
        <div className="flex item-center gap-1">
            <span><CiLocationOn /></span>
            <h1>Year Of Publishing: {yearOfPublishing}</h1>
        </div>
    </div>

    <div className="flex gap-5">
        
        <div className="flex gap-1 item-center">
            <h1><span><MdContactPage /></span></h1>
            <h1>Publisher:{publisher}</h1>
        </div>
        <div className="flex gap-1 item-center" >
            <span><FaBook /></span>
            <h1>Total Pages:{totalPages}</h1>
        </div>
    </div>

    <div className="flex gap-5">
        <div className="bg-blue-100 p-2 rounded xl">
            <h1 className="text-blue-900">Category:{category}</h1>
        </div>
        <div className="bg-orange-100 p-2 rounded-xl">
            <h1 className="text-orange-900">Rating {rating}</h1>
        </div>

        <div>
        <button className="btn btn-success text-white">View Details</button>
        </div>
    </div>
</div>

</div>
            
        </div>
    );
};

export default SingleWishlist;