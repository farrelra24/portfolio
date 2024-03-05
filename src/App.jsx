// import './App.css'
import { IoLogoFigma } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { MdWeb } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbPhotoEdit } from "react-icons/tb";

function App() {
  return (
    <>
      <div className="relative w-full h-[100vh]">
        <div className="absolute right-0">
          <div className="bg-blue-200 w-[34vw] h-[100vh]"></div>
        </div>
        <img
          className="absolute bottom-0 right-96 w-[448.99px] h-[592px] object-cover"
          src={"/person.png"}
          alt=""
        />
        <div className="absolute right-20 top-20">
          <div
            className="rotate-360 text-white text-5xl font-serif font-extrabold"
            style={{ writingMode: "vertical-rl" }}>
            FARREL
          </div>
        </div>
        <div className="absolute right-20 top-80">
          <div
            className="rotate-360 text-blue-950 text-5xl font-serif font-extrabold"
            style={{ writingMode: "vertical-rl" }}>
            RAFI
          </div>
        </div>
        <div className="absolute bottom-0 left-60">
          <div className="flex flex-col items-end justify-top bg-white w-[450px] h-[150px]">
            <div className="text-[48px] font-serif text-blue-950">
              Web Developer
            </div>
            <button class="mt-4 border-blue-950 border-2 bg-white text-blue-950 rounded-full p-2">
              Hire Me
            </button>
          </div>
          <div className="flex flex-row items-center justify-start bg-white w-[450px] h-[90px]">
            <div className="text-[48px] font-serif text-blue-950">8+</div>
            <div className="text-[17px] font-serif text-blue-950 p-2">
              Year of experience in Web Development
            </div>
          </div>
          <div className="flex flex-row items-center justify-end bg-white w-[450px] h-[90px]">
            <div className="text-[17px] font-serif text-blue-950">
              Projects worked in my career
            </div>
            <div className="text-[48px] font-serif text-blue-950 p-2">20+</div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[50vh] bg-blue-50">
        <div className="font-serif text-3xl pt-12 pl-12 text-blue-950">
          Skills
        </div>
        <div className="font-serif text-3xl pt-2 pl-12 italic text-slate-400">
          MY TOP SKILLS
        </div>
        <div className="flex items-center justify-center">
          <div className="pt-8 w-[75%]">
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              <button className="bg-white border-2 border-slate-200 rounded-md w-50 h-20">
                <div className="flex items-center justify-between p-4">
                  <IoLogoFigma size={48} />
                  <div className="font-serif font-bold text-2xl text-blue-950">
                    Figma
                  </div>
                  <FaArrowRight size={20} />
                </div>
              </button>
              <button className="bg-white border-2 border-slate-200 rounded-md w-50 h-20">
                <div className="flex items-center justify-between p-4">
                  <RiReactjsFill size={48} />
                  <div className="font-serif font-bold text-2xl text-blue-950">
                    React.js
                  </div>
                  <FaArrowRight size={20} />
                </div>
              </button>
              <button className="bg-white border-2 border-slate-200 rounded-md w-50 h-20">
                <div className="flex items-center justify-between p-4">
                  <FaPython size={48} />
                  <div className="font-serif font-bold text-2xl text-blue-950">
                    Python
                  </div>
                  <FaArrowRight size={20} />
                </div>
              </button>
              <button className="bg-white border-2 border-slate-200 rounded-md w-50 h-20">
                <div className="flex items-center justify-between p-4">
                  <SiAdobephotoshop size={48} />
                  <div className="font-serif font-bold text-2xl text-blue-950">
                    Photoshop
                  </div>
                  <FaArrowRight size={20} />
                </div>
              </button>
              <button className="bg-white border-2 border-slate-200 rounded-md w-50 h-20">
                <div className="flex items-center justify-between p-4">
                  <FaNodeJs size={48} />
                  <div className="font-serif font-bold text-2xl text-blue-950">
                    Node.js
                  </div>
                  <FaArrowRight size={20} />
                </div>
              </button>
              <button className="bg-white border-2 border-slate-200 rounded-md w-50 h-20">
                <div className="flex items-center justify-between p-4">
                  <GrMysql size={48} />
                  <div className="font-serif font-bold text-2xl text-blue-950">
                    MySQL
                  </div>
                  <FaArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[50vh]">
        <div className="font-serif text-3xl pt-12 pl-12 text-blue-950">
          Services
        </div>
        <div className="font-serif text-3xl pt-2 pl-12 italic text-slate-400">
          WHAT I OFFER
        </div>
        <div className="flex items-center justify-center">
          <div className="pt-8 w-[75%]">
            <div className="grid grid-cols-3 grid-rows-1 gap-5">
              <button className="bg-blue-50 border-2 border-slate-200 rounded-md w-50 h-40">
                <div className="flex flex-col items-center justify-between p-5">
                  <MdWeb size={48} />
                  <div className="pt-5 font-serif font-bold text-2xl text-blue-950">
                    Web Development
                  </div>
                </div>
              </button>
              <button className="bg-blue-50 border-2 border-slate-200 rounded-md w-50 h-40">
                <div className="flex flex-col items-center justify-between p-5">
                  <MdOutlineDesignServices size={48} />
                  <div className="pt-5 font-serif font-bold text-2xl text-blue-950">
                    UI/UX Designing
                  </div>
                </div>
              </button>
              <button className="bg-blue-50 border-2 border-slate-200 rounded-md w-50 h-40">
                <div className="flex flex-col items-center justify-between p-5">
                  <TbPhotoEdit size={48} />
                  <div className="pt-5 font-serif font-bold text-2xl text-blue-950">
                    Photoshop Editing
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[100vh] bg-blue-50">
        <div className="font-serif text-3xl pt-12 pl-12 text-blue-950">
          Projects
        </div>
        <div className="font-serif text-3xl pt-2 pl-12 italic text-slate-400">
          MY CREATION
        </div>
        <img
          className="absolute bottom-0 left-24 w-[657px] h-[537.94px] object-cover"
          src={"/person2.png"}
          alt=""
        />
      </div>
      <div className="relative w-full h-[50vh]">
        <div className="font-serif text-3xl pt-12 pl-12 text-blue-950">
          Testimonials
        </div>
        <div className="font-serif text-3xl pt-2 pl-12 italic text-slate-400">
          MY CLIENT REVIEWS
        </div>
      </div>
      <div className="relative w-full h-[75vh]">
        <div className="font-serif text-3xl pt-12 pl-12 text-blue-950">
          Hire Me
        </div>
        <div className="font-serif text-3xl pt-2 pl-12 italic text-slate-400">
          FOR YOUR PROJECTS
        </div>
        <img
          className="absolute bottom-0 right-96 w-[448.99px] h-[592px] object-cover"
          src={"/person3.png"}
          alt=""
        />
      </div>
    </>
  );
}

export default App;
