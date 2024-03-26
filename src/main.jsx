import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Component/Home/Home';
import ListedBooks from './Component/ListedBooks/ListedBooks';
import BookDetails from './Component/BookDetails/BookDetails';
import Upcoming from './Component/Upcoming/Upcoming';
import Payment from './Component/Payment/Payment';
import ReadPage from './Component/ReadPage/ReadPage';
import WishList from './Component/WishList/WishList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listedBooks",
        element:<ListedBooks></ListedBooks>,
        children:[
          {
            index:true,
            element:<ReadPage></ReadPage>
          },
          {
            path:"/listedBooks/wishList",
            element:<WishList></WishList>
          }
        ]
      },
      {
        path:"/pageToRead",
        element:<ReadPage></ReadPage>
      },
      {
        path:"/:id",
        element:<BookDetails></BookDetails>,
        loader: ()=> fetch("../data.json")
      },
      {
        path:"/upcoming",
        element:<Upcoming></Upcoming>
      },
      {
        path:"/payment",
        element:<Payment></Payment>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
