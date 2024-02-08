"use client"
import Image from "next/image"
import Link from "next/link"
export default function SoundMenuCard({title,description,src,route}){
    return(
        <div
            className="border shadow-2xl hover:scale-[102%] shadow-gray-200 rounded-2xl cursor-pointer">
            <Image draggable='false' className="rounded-tl-xl rounded-tr-xl" 
            src={src}
            width={600}
            height={200}
            />
            <div className="px-10 py-5">
            <h1 className="text-lg font-bold py-5 ">{title}</h1>
            <p className="text-sm text-gray-500 xl:w-[380px]">{description}</p>
            <button className="text-white bg-blue-500 mt-5 w-[110px] rounded-md py-2 px-3"><Link href={route}>Play</Link></button>
            </div>

        </div>
    )
}