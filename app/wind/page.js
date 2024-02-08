import Navbar from "@/Components/Navbar/Navbar";
import SoundCard from "@/Components/SoundCard/SoundCard";

export default function Page(){
    return(
        <div>
            <Navbar/>
            <SoundCard src={'windbg.mp4'} audioSrc = {'windsound.m4a'} />
        </div>
    )
}