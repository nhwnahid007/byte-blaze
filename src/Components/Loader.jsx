import { ScaleLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-288px)]">
           <ScaleLoader size={100} color="#36d7b7" /> 
        </div>
    );
};

export default Loader;