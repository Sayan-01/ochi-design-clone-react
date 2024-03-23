import React, { useEffect, useState } from "react";
import Eyeball from "./Eyeball";

function Eyes() {
  let [rotate, setRotate] = useState(0);
  let [move, setMove] = useState();


  useEffect(() => {})

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let delX = mouseX - window.innerWidth / 2;
      let delY = mouseY - window.innerHeight / 2;
      let ang = Math.atan2(delY, delX) * (188 / Math.PI);

      setRotate(ang - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="image relative w-full h-screen bg-center bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]">
        <div className="absolute flex gap-10 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">

          <div className="w-[14vw] flex items-center justify-center rounded-full h-[14vw] bg-slate-100">
            <div className="w-[9vw] relative rounded-full h-[9vw] bg-slate-900">
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[1.2vw]">
                <div className="w-[1.2vw] rounded-full h-[1.2vw] bg-slate-100"></div>
              </div>
            </div>
          </div>

          <div className="w-[14vw] flex items-center justify-center rounded-full h-[14vw] bg-slate-100">
            <div className="w-[9vw] relative rounded-full h-[9vw] bg-slate-900">
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[1.2vw]">
                <div className="w-[1.2vw] rounded-full h-[1.2vw] bg-slate-100"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Eyes;
