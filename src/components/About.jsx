import React from "react";

function About() {
  return (
    <div className="w-full py-20 bg-[#cdea68] rounded-t-2xl">
      <div className="w-[85vw]">
        <h1 className="font-['Neue_Montreal'] text-[3.6vw] pb-20 leading-none px-14">
          Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
      </div>
      <div className="w-full h-[20vw] border-t-[1px] bg-[#cdea68] border-zinc-500"></div>

      <div className="approch w-full h-[32vw] border-t-[1px] bg-[#cdea68] py-4 flex border-zinc-500">
        <div className="w-1/2 px-14 ">
          <h1 className="text-[3.6vw] leading-none">Our approach:</h1>
          <button className="flex uppercase gap-10 items-center px-7 py-5 bg-zinc-900 mt-8 rounded-full text-white">
            Read more
            <div className="w-3 h-3 bg-slate-50 rounded-full"></div>
          </button>
        </div>
        <div className="image w-1/2 h-[32vw] mr-[3.5vw] bg-slate-500 rounded-2xl"></div>
      </div>
    </div>
  );
}

export default About;
