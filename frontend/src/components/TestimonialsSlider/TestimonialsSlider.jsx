import React from "react";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpeg"

function TestimonialsSlider() {
  return (
    <div>
      <div className="my-8 ">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-2xl md:text-[3rem] leading-none font-semibold text-center">
            Don't just take our words... Read reviews from our members
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 gap-10">
          <div className="flex flex-col max-w-sm  m-3 hover:scale-110 duration-300 bg-gray-300 rounded-[22px]">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12   ">
              <p className="relative px-6 py-1 text-lg   text-center    ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-purple-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                The CodeBird coding club at University Institute of Technology,
                Burdwan, is known for its innovation, diverse offerings, and
                fostering skill development in a collaborative coding culture.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-purple-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
              <p className="text-[25px] text-center">🌟🌟🌟🌟🌟</p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
              <img
                src={img3}
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  "
              />
              <p className="text-xl font-semibold leading-tight">
              Mohtasheem Ejaz
              </p>
              <p className="text-sm uppercase">President of the Codebird</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm  m-3 hover:scale-110 duration-300 bg-gray-300 rounded-[22px]">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12   ">
              <p className="relative px-6 py-1 text-lg   text-center    ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-purple-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                The CodeBird excels in its unique structure, encouraging members
                to explore diverse domains like web development, data science,
                mobile apps, and competitive coding, helping each member find
                their niche and thrive.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-purple-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>{" "}
              <p className="text-[25px] text-center">🌟🌟🌟🌟🌟</p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
              <img
                src={img1}
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  "
              />
              <p className="text-xl font-semibold leading-tight">
                Anuraj Kumar
              </p>
              <p className="text-sm uppercase">Web-Dev lead of The Codebird</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm  m-3 hover:scale-110 duration-300 bg-gray-300 rounded-[22px]">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12   ">
              <p className="relative px-6 py-1 text-lg   text-center    ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-purple-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                The CodeBird's commitment to skill development is evident
                through coding challenges and hands-on workshops. Engaging
                members in real-world projects enhances coding skills,
                problem-solving, and teamwork.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-purple-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>{" "}
              <p className="text-[25px] text-center">🌟🌟🌟🌟🌟</p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
              <img
                src={img2}
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  "
              />
              <p className="text-xl font-semibold leading-tight">Aditya Raj</p>
              <p className="text-sm uppercase">
                Android/DSA lead of The Codebird
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm  m-3 hover:scale-110 duration-300 bg-gray-300 rounded-[22px]">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12   ">
              <p className="relative px-6 py-1 text-lg   text-center    ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-purple-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                The CodeBird's dedication to open-source contributions is
                commendable. Encouraging members to contribute to larger
                projects promotes knowledge-sharing and collaboration globally.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-purple-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>{" "}
              <p className="text-[25px] text-center">🌟🌟🌟🌟🌟</p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
              <img
                src={img4}
                alt="kingshuk"
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  "
              />
              <p className="text-xl font-semibold leading-tight">
                
                @ImKKingshuk
              </p>
              <p className="text-sm uppercase">Dev</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSlider;
