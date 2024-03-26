import { useEffect, useState } from "react";
import { getDataFromLocal } from "../../utility/utility";
import SingleReadPage from "../SingleReadPage/SingleReadPage";


const ReadPage = () => {

    const [readData,setReadData]=useState([]);

    useEffect(()=>{
        setReadData(getDataFromLocal())
    },[])
    return (
        <div className="mt-10 space-y-5">

           {
            readData.map((item,index)=><SingleReadPage key={index} item={item}></SingleReadPage>)
           }
            
        </div>
    );
};

export default ReadPage;