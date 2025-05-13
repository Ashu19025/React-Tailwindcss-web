import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function About() {
    return (
        <div className="text-center  text-yellow-500">
            {/* Uppersection*/}
            <section className=" text-3xl font-bold text-center py-40" style={{backgroundImage: "url(https://i.pinimg.com/736x/8f/69/92/8f69920f16450308e0d62a7e9af04c01.jpg)"}}>
                <h2 className="text-3xl font-bold ">About</h2>
                <p className="text-2xl font-bold">This is an about page</p>
            </section>

            {/* info*/}
            <section className=" py-40 px-40 bg-black text-center ">
                <div className="flex flex-col justify-center ">
                <h2 className="text-3xl font-bold mb-6">The Best Gaming Studio For All Gamer.</h2>
                <ul className="space-y-4 text-lg">
                 <li>Live Streaming - For business which a product online product listings in the.</li>
                 <li>Great Tournament - For business which a product online product listings in the.</li>
                 <li>Gaming News - For business which a product online product listings in the.</li>
                 </ul>
          
                </div>
            </section>
        </div>
    );

    
}