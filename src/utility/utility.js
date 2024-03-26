
import Swal from "sweetalert2";

export const saveTolocalStorage = (book)=>{

    const saveData=JSON.parse(localStorage.getItem("books"))||[]
    const isExist = saveData.find(item=>item?.bookId==book?.bookId)

    if(isExist){
        Swal.fire("Already Added");
    }
    else{
        saveData.push(book)
        Swal.fire("Added To the Read Books");
        localStorage.setItem("books",JSON.stringify(saveData))
    }
  
}

export const getDataFromLocal =()=>{
    const getData= JSON.parse(localStorage.getItem("books"))||[];
    return getData;
}