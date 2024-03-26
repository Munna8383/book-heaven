import { useEffect, useState } from "react";
import { getWishDataFromLocal } from "../../utility/wishList";
import SingleWishlist from "../singleWishlist/SingleWishlist";


const WishList = () => {

    const [wishList,setWishList]=useState([]);

    useEffect(()=>{
        setWishList(getWishDataFromLocal())
    },[])
    return (
        <div className="mt-10 space-y-5">

            {
                wishList.map((wish,index)=><SingleWishlist key={index} wish={wish}></SingleWishlist>)
            }
            
            
        </div>
    );
};

export default WishList;