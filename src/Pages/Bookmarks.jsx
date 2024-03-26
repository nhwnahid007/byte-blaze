import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import Blog from "../Components/Blog";


const Bookmarks = () => {
    const [blogs,setBllogs] =useState([])
    useEffect(()=>{
        const storedBlogs =getBlogs()
        setBllogs(storedBlogs)
    },[])
    const handleDelete = id =>{
        deleteBlog(id)
        const storedBlogs =getBlogs()
        setBllogs(storedBlogs)
      }
      if(blogs.length<1) return <h1>Kichu nai</h1>
    return (
        <div className="grid mt-10 sm:px-8 lg:px-12 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
                blogs.slice(1,19).map(blog => <Blog handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></Blog>)
            }
			
		</div>
    );
};

export default Bookmarks;