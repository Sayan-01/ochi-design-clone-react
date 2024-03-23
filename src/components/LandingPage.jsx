import React from "react";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-[#F1F1F1] pt-1">
      <div className="textstructure mt-[12vw] px-14 flex flex-col">
        {["we create", "eye opening", "presentation"].map((item, index) => {
          return (
            <div className="masker flex">
              {index === 1 && <div className="w-[9vw] h-[5.7vw] relative top-[0.15vw] rounded-md mr-[1vw] bg-sky-300"></div>}
              <h1 className="uppercase antonio-g text-[8vw] leading-[0.86] text-[#212121]">{item}</h1>
            </div>
          );
        })}
      </div>

      <div className="border-t-2 border-zinc-300 px-14 mt-[9rem] flex justify-between ">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
          return <p className="text-md mt-4">{item}</p>;
        })}
        <div className="start flex items-center gap-1 justify-center">
          <div className="text-md mt-3 border-2 uppercase px-3 py-[4px] rounded-full border-zinc-500">start the project</div>
          <div className=" py-[4px] mt-3 px-[10px] rounded-full border-2 border-zinc-500">
            <p className="flex items-center justify-center">~</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
