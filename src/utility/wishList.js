

import Swal from "sweetalert2";

export const saveWishTolocalStorage = (book)=>{

    const saveData=JSON.parse(localStorage.getItem("wishlist"))||[]
    const Exist = saveData.find(one=>one.bookId===book.bookId)

    if(Exist){
        Swal.fire("Already Added");
    }
    else{
        saveData.push(book)
        Swal.fire("Added To the wishlist");
        localStorage.setItem("wishlist",JSON.stringify(saveData))
    }
  
}

export const getWishDataFromLocal =()=>{
    const getData= JSON.parse(localStorage.getItem("wishlist"))||[];
    return getData;
}