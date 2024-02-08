"use client"
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
export default function FAQs({question,answer}){
const [faq,openfaq] = useState(false);
    return(
        faq ?
        <div className="xl:flex xl:flex-col xl:items-center xl:mx-[500px] bg-white border rounded-xl my-8 border-black px-5 py-5 shadow-md shadow-gray-400  mx-5 ">
            <div 
            onClick={()=>{
                openfaq(false)
            }} className="cursor-pointer flex justify-between xl:gap-[200px] px-5">
                <h1 className="text-sm text-gray-600 font-semibold">{question}</h1>
                <button onClick={()=>{
                    openfaq(false)
                }} ><FaArrowUp /></button>
            </div>
            <div>
                <p className="text-sm  tracking-wide my-5 px-5 text-gray-500">{answer}</p>
            </div> 
        </div>
        :
        <div className="xl:flex xl:flex-col xl:items-center xl:mx-[500px] bg-white border rounded-xl my-8 border-black px-5 py-5 shadow-md shadow-gray-400 mx-5">  
        <div onClick={()=>{
            openfaq(true)
        }} className="flex cursor-pointer transition-[0.5s] ease-in-out justify-between xl:gap-[200px] px-5">
                <h1 className="text-sm  text-gray-600 font-extrabold">{question}</h1>
                <button onClick={()=>{
                    openfaq(true)
                }} ><FaArrowDown /></button>
            </div>
        </div>
    )
}