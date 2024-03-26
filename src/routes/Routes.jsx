import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import SingleBlog from "../Pages/SingleBlog";
import Content from "../Components/Content";
import Author from "../Components/Author";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
          loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
        },
        {
          path: "/bookmarks",
          element: <Bookmarks></Bookmarks>,
        },
        {
          path: "/blog/:id",
          element: <SingleBlog></SingleBlog>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
          ,
          children:[
            {
                index:true,
                element: <Content></Content>
            },
            {
                path: 'author',
                element:<Author></Author>
            }
          ]
        },
      ],
    },
  ]);