

const Upcoming = () => {
    return (
       <div className="w-11/12 mx-auto mt-10">
        <div className="text-center">
            <h1 className="text-3xl font-bold">Upcoming Books</h1>
        </div>
         <div className="relative flex items-center justify-center w-full dark:text-gray-900">
        <button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50">
            <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </button>
        <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://i.ibb.co/R6Ltx6F/sincerely-media-CXYPfveiuis-unsplash.jpg" alt="Image 1" />
            </div>
            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://i.ibb.co/fp36BmN/madalyn-cox-O7ygzp-AL4-Mc-unsplash.jpg" alt="Image 2" />
            </div>
            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://i.ibb.co/60h9sbR/tim-alex-1i-P178kx-HQ-unsplash-1.jpg" alt="Image 3" />
            </div>
            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://i.ibb.co/7gXMVcc/tim-alex-x-G5-VJW-7-Bio-unsplash-1.jpg" alt="Image 4" />
            </div>
            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://i.ibb.co/GRdXyVR/matt-ridley-H-LIL57-PHCc-unsplash.jpg" alt="Image 5" />
            </div>
        </div>
        <button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </button>
    </div>
       </div>
    );
};

export default Upcoming;