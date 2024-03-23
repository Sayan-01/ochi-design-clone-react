import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="w-full py-[7vw] bg-[#004D43] rounded-2xl ">
      <div className="text  border-b-2 border-t-2 flex whitespace-nowrap border-zinc-500 overflow-hidden">
        <motion.h1
          initian={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[25vw] font-semibold leading-none -mt-[1vw] -mb-[3.6vw] text-zinc-50 px-6 antonio-g"
        >
          WE ARE SAYAN
        </motion.h1>

        <motion.h1
          initian={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[25vw] px-6 font-semibold leading-none -mt-[1vw] -mb-[3.6vw] text-zinc-50 antonio-g"
        >
          WE ARE SAYAN
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
