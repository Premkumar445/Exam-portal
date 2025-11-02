import mocktestimg from "../assets/mockup1.webp";
import mockup2 from "../assets/mockup2.webp";
import mockup3 from "../assets/mockup3.webp";
import mockup4 from "../assets/mockup4.webp";
import sideimg from "../assets/testbookside.svg";

const Mockup = () => {
  return (
    <>
      <section
        id="mockup-section"
        className=" flex flex-col items-center justify-center    mb-18 "
      >
        <div className="flex justify-around max-md:flex-col items-center md:px-10 md:gap-4 mb-14  mt-5 ">
          <div className="flex justify-center items-center ">
            <img
              className="rounded-xl max-md:w-[80%]"
              src={sideimg}
              alt="leftsideimage"
            />
          </div>

          <div className="space-y-6 flex flex-col max-md:w-[80%] max-md:mt-6  md:w-[50%]">
            <div className="space-y-2 flex flex-col  ">
              <h2 className="font-bold text-2xl lg:text-3xl text-gray-800  ">
                Seamless exam prep, innovative solutions, and collaborative
                learning excellence.
              </h2>
              <p className="text-gray-500   ">
                MockMaster redefines exam preparation with tailored solutions,
                advanced features, and a collaborative community, fostering an
                environment for elevated learning and success.
              </p>
            </div>

            <ul role="list" className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  <span className="font-bold">Streamlined Test </span>
                  Designing
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  Robust <span className="font-bold">Features </span>
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  Exceptional User Experience
                </span>
              </li>
            </ul>
          </div>
        </div> 
      </section>
    </>
  );
};

export default Mockup;
