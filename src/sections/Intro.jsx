import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 relative  pt-[12%] ">

        <img src="images/about.png" alt="" className=" absolute top-2 h-[300px] left-4 " />
      
     

        <div className="  px-4  py-6 border-4 bg-white text-black text-center border-[#e27321] relative z-50 rounded-2xl  ">

          <h1 className="text-5xl font-bold text-center my-3">Spider Monkey you are great</h1>



          <p className=" text-2xl py-6 px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos voluptatum culpa aut sed autem accusamus quisquam, id quod dicta modi repudiandae nulla quas, deleniti voluptas cum expedita numquam esse!
          </p>

          <a
            href="#"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-two px-10 rounded-xl bg-[#e27321] shadow-lg shadow-black/40 text-black  font-bold  border-[#f45a7c] border-2 my-2"
          >
            DEXTOOLS
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
