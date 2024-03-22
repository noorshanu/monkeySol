import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 relative  pt-[12%] ">

        <img src="images/about.png" alt="" className=" absolute top-2 h-[300px] left-4 " />
      
     

        <div className="  px-4  py-6 border-4 bg-white text-black text-center border-[#e27321] relative z-50 rounded-2xl  ">

          <h1 className="text-5xl font-bold text-center my-3">Spider Monkey you are great</h1>



          <h1 className=" font-sushi-two text-3xl font-bold text-black my-3">Spider Monkey Turning crypto into a jungle gym of giggles</h1>


          <p className=" text-2xl py-6 px-4">
          Spider Monkey Meme Coin isn't your average meme – oh no! It's a whirlwind adventure through the jungle of digital finance, where every twist and turn brings a new burst of excitement and hilarity. Its mission is to be the most entertaining, engaging, and downright meme-tastic coin on the Solana blockchain!
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
