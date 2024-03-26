import { useLoaderData } from "react-router-dom";


const Content = () => {
    const blog = useLoaderData()
    return (
        <div>
           <h1>{blog.title}</h1> 
        </div>
    );
};

export default Content;