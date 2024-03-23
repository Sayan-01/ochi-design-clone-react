import React from "react";

function Eyeball() {
  return (
    <>
      <div className="w-[14vw] flex items-center justify-center rounded-full h-[14vw] bg-slate-100">
        <div className="w-[9vw] relative rounded-full h-[9vw] bg-slate-900">
          <div className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[1.2vw]">
            <div className="w-[1.2vw] rounded-full h-[1.2vw] bg-slate-100"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eyeball;
