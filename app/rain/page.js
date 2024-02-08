import Navbar from "@/Components/Navbar/Navbar";
import SoundCard from "@/Components/SoundCard/SoundCard";

export default function Page(){
    return(
        <div>
            <Navbar/>
            <SoundCard src={'rainbg.mp4'} audioSrc={'rainsound.m4a'} />
        </div>
    )
}