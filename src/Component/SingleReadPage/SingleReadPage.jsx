/* eslint-disable react/prop-types */


const SingleReadPage = ({item}) => {

    const {image,bookName,author,tags,yearOfPublishing,publisher,category,rating,totalPages}=item
    return (
        <div className="flex justify-around border-gray-500 border rounded xl items-center p-5">

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

                <div className="flex gap-5">
                    <div className="flex gap-4">
                        <h1>#{tags[0]}</h1>
                        <h1>#{tags[1]}</h1>
                    </div>
                    <div>
                        <h1>Year Of Publishing: {yearOfPublishing}</h1>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div >
                        <h1>Publisher {publisher}</h1>
                    </div>
                    <div>
                        <h1>Total Pages: {totalPages}</h1>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div>
                        <h1>Category {category}</h1>
                    </div>
                    <div>
                        <h1>Rating {rating}</h1>
                    </div>

                    <div>
                        <button>View</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleReadPage;