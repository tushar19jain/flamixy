import Link from "next/link";
export default function MessageBox(){
    return(
        <div className="mx-auto  xl:mx-[330px] transition-[1s] ease-in-out bg-gradient-to-r from-sky-50 to-cyan-100   h-[255px]  xl:h-[224px] mt-[-300px]  shadow-xl shadow-slate-300 xl:shadow-3xl xl:shadow-gray-100" >
           <button className="bg-black text-[10px] font-extrabold ml-[180px] mt-[70px] px-3 xl:px-20 py-3 xl:ml-[320px]  xl:text-2xl rounded-xl xl:mt-[70px] text-white font-mono"><Link href= "/ambient" >Wishlist Now!</Link></button>
           <img className="w-[130px] mt-[28px]  ml-[190px] rotate-[-45deg] md:hidden " src="trynow-arrow.svg"></img>
        </div>
    )
}