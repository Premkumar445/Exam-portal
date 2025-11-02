import heroimage from "../assets/Desktopimage.webp";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";
import { useContext } from "react";

const Hero = () => {
  const { islogin } = useContext(UserContext);
  return (
    <>
      <section
        id="hero-section"
        className="min-h-[90vh] relative flex items-center justify-center bg-white"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
          {/* Left content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-6/12">
            <h1 className="mb-3 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Building{" "}
              <span className="text-blue-600">NextGen,</span> <br />
              achieving today, succeeding tomorrow!
            </h1>
            <p className="mb-8 max-w-[480px] text-lg font-light text-gray-700">
              Welcome to <b>NextGen</b> — your gateway to empowered learning
              through comprehensive mock tests and AI-driven performance insights.
            </p>
            <Link
              to={islogin ? "/Dashboard/test-series" : "/login"}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Right image */}
          <div className="mt-10 lg:mt-0 lg:w-6/12 flex justify-center">
            <img
              src={heroimage}
              alt="hero"
              className="max-w-md lg:max-w-xl w-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
