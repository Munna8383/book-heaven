import { useLoaderData, useParams } from "react-router-dom";
import { saveTolocalStorage } from "../../utility/utility";



const BookDetails = () => {

    const books = useLoaderData();
    const {id}  = useParams();

    const book = books.find(singleBook=>singleBook.bookId==id);

    const {image,bookName,author,review,totalPages,tags,publisher,yearOfPublishing,category,rating}=book

    const handleRead =()=>{

        saveTolocalStorage(book)
      
    }

    return (
        <div className="mt-10 w-11/12 mx-auto mb-5">

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

                <div>
                    <img src={image} alt="" />
                </div>

                <div className="space-y-2">
                    
                    <div>
                        <h1 className="text-3xl font-bold">{bookName}</h1>
                    </div>
                    <hr />
                    <div>
                        <h1><span className="text-lg font-bold">Written By: </span>{author}</h1>
                    </div>
                    <hr />
                    <div>
                        <h1><span className="text-lg font-bold">Category: </span>{category}</h1>
                    </div>
                    <hr />
                    <div>
                        <p><span className="text-lg font-bold">Review: </span>{review}</p>
                    </div>
                    <div className="flex gap-10">
                        <span className="text-lg font-bold">Tags:</span>
                        <h1 className="text-green-600">#{tags[0]}</h1>
                        <h1 className="text-green-600">#{tags[1]}</h1>
                    </div>
                    <hr />
                    <div>
                        <h1>Number of Pages:     <span className=" font-bold">{totalPages}</span></h1>
                    </div>
                    <div>
                        <h1>Publisher:     <span className=" font-bold">{publisher}</span></h1>
                    </div>

                    <div>
                        <h1>Year of Publishing:     <span className="font-bold">{yearOfPublishing}</span></h1>
                    </div>

                    <div>
                        <h1>Rating:     <span className=" font-bold">{rating}</span></h1>
                    </div>

                    <div className="flex gap-5">
                    <button onClick={handleRead} className="btn font-bold">Read</button>
                    <button className="btn btn-active text-white btn-accent">Wishlist</button>
                    </div>



                </div>






            </div>

          
            
        </div>
    );
};

export default BookDetails;