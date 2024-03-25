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
import PageToRead from './Component/PageToRead/PageToRead';
import BookDetails from './Component/BookDetails/BookDetails';

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
        element:<ListedBooks></ListedBooks>
      },
      {
        path:"/pageToRead",
        element:<PageToRead></PageToRead>
      },
      {
        path:"/:id",
        element:<BookDetails></BookDetails>,
        loader: ()=> fetch("../data.json")
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
