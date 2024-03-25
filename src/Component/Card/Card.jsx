/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";


const Card = ({card}) => {

    const{bookId,tags,bookName,author,category,rating,image}= card
    return (
       <Link to={`/${bookId}`}>

<div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />

            <div className="flex justify-between mt-3">
                <div className="bg-gray-100 p-2 text-lime-500">
                    <p>#{tags[0]}</p>
                </div>
                <div className="bg-gray-100 p-2 text-lime-500">
                    <p>#{tags[1]}</p>
                </div>
            </div>
            <div className="mt-6 mb-2">
                
                <h2 className="text-xl font-semibold tracking-wide">{bookName}</h2>
            </div>
            <p className="dark:text-gray-800">By: {author}</p>

            <div className="flex justify-between mt-3">
                <div>
                    <p>{category}</p>
                </div>
                <div className="flex items-center">
                    <p>{rating}</p>
                    <p><CiStar /></p>
                </div>
            </div>
        </div>
       
       </Link>
    );
};

export default Card;