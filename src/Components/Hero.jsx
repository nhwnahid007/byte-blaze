import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            Welcome to <span>ByteBlaze</span>
          </h1>
          <p className="py-6">
            <p>
              ByteBlaze is a cutting-edge technology platform dedicated to
              igniting innovation and empowering creators. Our website serves as
              a dynamic hub for developers, designers, and tech enthusiasts,
              offering a rich array of resources, tutorials, and tools to fuel
              their passion for coding and digital creation. Join us at
              ByteBlaze and unleash your creative potential.
            </p>
          </p>
          <div className="flex gap-2 justify-center items-center ">
            <Link
              to={"/blogs"}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0" />
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary" />
              <span className="relative text-black group-hover:text-white">
                Read Blogs
              </span>
            </Link>

            <Link
              to={"/blogs"}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0" />
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary" />
              <span className="relative text-black group-hover:text-white">
                Bookmarks
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
