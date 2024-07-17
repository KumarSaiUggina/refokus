import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "Arqu Executive and its employee continue to receive orders for  customers and customers that get orders for customers that.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Arqu Executive and its employee continue to receive orders for  customers and customers that get orders for customers that.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Arqu Executive and its employee continue to receive orders for  customers and customers that get orders for customers that.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo",
      description:
        "Arqu Executive and its employee continue to receive orders for  customers and customers that get orders for customers that.",
      live: true,
      case: false,
    },
    {
      title: "Rainfall",
      description:
        "Arqu Executive and its employee continue to receive orders for  customers and customers that get orders for customers that.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative ">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%] rounded-xl  overflow-hidden "
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-100"
            transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-300"
            transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-400"
            transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-500"
            transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
