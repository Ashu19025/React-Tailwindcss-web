import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
    <div className="bg-black min-h-screen w-full">
    <motion.div className=" text-center py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <h1 className="text-yellow-500  text-4xl ">Contact Us</h1>
        
      <p className="text-yellow-500  max-w-2xl mx-auto py-4">
        Have questions? Reach out to our support team anytime at 
      </p>
      <span className="underline text-yellow-500  text-2xl font-bold">support@repeat.com.</span>
    </motion.div>
    </div>
    </>
  );
}