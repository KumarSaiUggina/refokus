import React from "react";
import { motion } from "framer-motion";

function Marquee({ imagesurls, direction }) {
  return (
    // <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden '>
    //     {imagesurls.map((url,index) => <img  key={index} src={url} className='w-[6vw] flex-shrink-0'/>)}
    //     {imagesurls.map((url, index) => <img key={index} src={url} className='flex-shrink-0'/>)}
    // </div>
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} alt="" className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} alt="" className="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
