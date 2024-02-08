import Navbar from "@/Components/Navbar/Navbar";
import SoundMenuCard from "@/Components/SoundMenuCard/SoundMenuCard";

export default function Page(){
    return(
        <div>
            <Navbar />
            <h1 className="text-3xl font-bold mx-[40px] my-[20px]">Choose from three of most satisfying sounds</h1>
            <p className="mx-[40px] my-[20px]">More sounds coming soon</p>
            <div className=" grid items-center my-10 justify-center xl:grid-cols-3  xl:my-20 gap-[60px] px-[20px]">
                <SoundMenuCard route={'/rain'} src={'/rainimage.jpeg'} title={"Rain"} description={" Sound of water is exceptionally relaxing and can help to calm the mind. If you find it difficult to concentrate, try listening to these or other water sounds. Nature sounds for studying can be used in the same way as background noise."} />
                <SoundMenuCard route={'/wind'} src={'/windimage.jpg'} title={"Wind"} description={"According to a study published in the journal Scientific Reports in March 2017, sounds of nature physically alter our brains' connections, reducing our body's natural fight-or-flight instinct."} />
                <SoundMenuCard route={'/cave'} src={'/caveimage.jpg'} title={"Cave"} description={"Cave sounds can be the soundtrack of your evening relaxation after a hard day. Get yourself into a good mood listening to the calm cave"} />
            </div>
          <footer className='py-[50px]'>
          <h1 className="text-center font-extrabold text-2xl">Flamixy</h1>
          <p className="text-center">The productive app</p>
          <p className="text-center  text-sm flex justify-center gap-1 items-center xl:text-md my-4">2024 deployed on <a className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent font-semibold text-xl" href="https://vercel.com/">Vercel</a> </p>
      </footer>
        </div>
    )
}