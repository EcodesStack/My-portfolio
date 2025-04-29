import work_1 from "../assets/ecommerce.png";
import work_2 from "../assets/real-estatee.png";
import work_3 from "../assets/doctor.png";
import work_4 from "../assets/aitech.png";
import send from "../assets/send-icon.png";
import rightArrow from "../assets/right-arrow-bold.png";
import rightArrowBold from "../assets/right-arrow-bold-dark.png";

const Work = () => {
  return (
    <div
      id="work"
      className="@container p-4 w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My Latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my developement portfolio! Explore a collection of projects
        showcasing my expertise in fullstack developement.
      </p>

      <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-4 gap-4 my-10 dark:text-black">
        <div
          style={{ backgroundImage: `url(${work_1})` }}
          className="aspect-square bg-no-repeat bg-cover bg-center
          rounded-lg relative cursor-pointer group"
        >
          <div
            className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3
          px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
          >
            <div>
              <h2 className="font-semibold font-ovo">Ecommerce Website</h2>
              <p className="text-sm text-gray-700">Full Stack [MERN-STACK]</p>
            </div>

            <div
              className="border rounded-full border-black w-9 aspect-square flex items-center justify-center
          shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
            >
              <img src={send} alt="" className="w-5 animate-pulse" />
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${work_2})` }}
          className="aspect-square bg-no-repeat bg-cover bg-center
          rounded-lg relative cursor-pointer group"
        >
          <div
            className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3
          px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
          >
            <div>
              <h2 className="font-semibold font-ovo">Real Estate Website</h2>
              <p className="text-sm text-gray-700">Frontend Website</p>
            </div>

            <div
              className="border rounded-full border-black w-9 aspect-square flex items-center justify-center
          shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
            >
              <a href="https://real-estate-f333e.web.app">
                <img src={send} alt="" className="w-5 animate-pulse" />
              </a>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${work_3})` }}
          className="aspect-square bg-no-repeat bg-cover bg-center
          rounded-lg relative cursor-pointer group"
        >
          <div
            className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3
          px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
          >
            <div>
              <h2 className="font-semibold font-ovo">
                Doctors Apointment Website
              </h2>
              <p className="text-sm text-gray-700">Full stack [MERN-STACK]</p>
            </div>

            <div
              className="border rounded-full border-black w-9 aspect-square flex items-center justify-center
          shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
            >
              <img src={send} alt="" className="w-5 animate-pulse" />
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${work_4})` }}
          className="aspect-square bg-no-repeat bg-cover bg-center
          rounded-lg relative cursor-pointer group"
        >
          <div
            className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3
          px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
          >
            <div>
              <h2 className="font-semibold font-ovo">AI Solutions Company</h2>
              <p className="text-sm text-gray-700">Frontend Website</p>
            </div>

            <div
              className="border rounded-full border-black w-9 aspect-square flex items-center justify-center
          shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
            >
              <a href="https://alynn-ai.vercel.app/">
              <img src={send} alt="" className="w-5 animate-pulse" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://github.com/EcodesStack"
        className="w-max flex items-center justify-center gap-2 text-gray-700 dark:border-[0.5px]
        rounded-md shadow-sm py-3 px-10 mx-auto my-20 hover:bg-lighthover duration-500 dark:text-white dark:border-white dark:hover:bg-darkhover"
      >
        See more on Git-hub
        <img src={rightArrow} alt="" className="w-3 dark:hidden" />
        <img src={rightArrowBold} alt="" className="w-3 hidden dark:block" />
      </a>
    </div>
  );
};

export default Work;
