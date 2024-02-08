"use client"
export default function SoundCard({src,audioSrc}){
    return(
        <div>
        <div className="relative  bg-slate-20" >
            <video className="mx-auto" onPause={()=>{
            }} height={300} width={500} autoPlay= "true" loop = "true" controls="none" fo >
            <source src={src}type="video/mp4" />
            </video>
            <audio id="bgaudio" className='audio' autoPlay='true' loop = 'true' src={audioSrc} ></audio>
        </div >
        <footer className='py-[50px]'>
          <h1 className="text-center font-extrabold text-2xl">Flamixy</h1>
          <p className="text-center">The productive app</p>
          <p className="text-center  text-sm flex justify-center gap-1 items-center xl:text-md my-4">2024 deployed on <a className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent font-semibold text-xl" href="https://vercel.com/">Vercel</a> </p>
      </footer>
    </div>
    )
}