import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

const Home = () => {
    const [cards,setCards]= useState([])

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div>

            <Banner></Banner>

            <div className="text-3xl text-center font-bold mt-10">
                <h1>Books</h1>
            </div>


            <div className="mt-10 w-11/12 mx-auto flex flex-col justify-center items-center lg:grid lg:grid-cols-3 gap-5">

                {
                    cards.map((card,index)=><Card key={index} card={card}></Card>)
                }

            </div>
           
            
        </div>
    );
};

export default Home;