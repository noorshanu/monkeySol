function Hero() {
  return (
    <section className=" pt-4  pb-[4rem]">
      <div className="container-wrapper">
        <div className=" flex justify-between flex-col sm:flex-row ">
          <div className=" w-full">
            <img src="images/hero.png" alt="" className=" h-[200px] " />

      

            <h1 className=" max-w-xl text-black text-2xl font-sushi-two font-semibold">
            Welcome to the wacky and wonderful world of Spider Monkey Meme Coin – where laughter, memes, and crypto collide in a frenzy of fun! 

Spider Monkey Meme Coin isn't your average meme – oh no! It's a whirlwind adventure through the jungle of digital finance, where every twist and turn brings a new burst of excitement and hilarity
            </h1>

            <div className=" py-2">
          <a
            href="#"
            target="_blank"
            className="my-2  font-sushi-two flex justify-center text-xs  text-black  border-[#f45a7c] sm:text-lg font-semibold border-2  rounded-2xl bg-[#e27321] max-w-xl py-1 "
          >
            {" "}
            Contract : 5f65PYwzhSEHfDBqMdqJoQnHyQVMnWQuiVzG7WaX4gu9
          </a>
        </div>
        <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
          <a
            href="https://t.me/Spider Monkey_solana"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-two font-semibold px-10 rounded-xl bg-[#e27321] shadow-lg shadow-black/40 text-black   border-[#f45a7c] border-2"
          >
            join telegram
          </a>

          <a
            href="#"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-two px-10 rounded-xl bg-[#e27321] shadow-lg shadow-black/40 text-black  font-bold  border-[#f45a7c] border-2"
          >
            DEXTOOLS
          </a>
        </div>
          </div>

          <div className=" w-full"> 
            <h1 className=" text-5xl font-bold text-center text-black">
              Spider Monkey
            </h1>

            <img src="images/hero2.png" alt="" className=" floating" />
          </div>
        </div>

        <div className="relative z-50"></div>

     

   
      </div>
    </section>
  );
}

export default Hero;
