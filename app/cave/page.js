import Navbar from "@/Components/Navbar/Navbar";
import SoundCard from "@/Components/SoundCard/SoundCard";

export default function Page(){
    return(
        <div>
            <Navbar/>
            <SoundCard src={'cavebg.mp4'} audioSrc = {'cavesound.m4a'} />
        </div>
    )
}