import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData();
    const {id}  = useParams();

    const book = books.find(singleBook=>singleBook.bookId==id);

    const {image,bookName,author,review,totalPages,tags,publisher,yearOfPublishing,category}=book

  console.log(book)
    return (
        <div className="mt-10">

            <div className="flex gap-25 justify-evenly items-center">

                <div>
                    <img className="w-96" src={image} alt="" />
                </div>

                <div>
                    
                    <div>
                        <h1>{bookName}</h1>
                    </div>
                    <div>
                        <h1>{author}</h1>
                    </div>



                </div>






            </div>

          
            
        </div>
    );
};

export default BookDetails;