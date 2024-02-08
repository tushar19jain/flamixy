import FAQs from "@/Components/FAQs/FAQs";
import FeaturesCard from "@/Components/FeaturesCard/FeaturesCard";
import MessageBox from "@/Components/MessageBox/MessageBox";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className = 'hero-text' >
        <h1 draggable={false}  className = 'bg-gradient-to-bl from-zinc-600 to-zinc-900 bg-clip-text text-transparent text-center text-4xl font-bold my-20 mx-18 leading-[40px] xl:text-5xl xl:w-[880px] xl:ml-[350px] xl:leading-[80px]'>The productivity app that helps you work like flamingo🦩</h1>
        <img className="ml-[130px] absolute z-[-1]  mt-[-80px] w-[130px]  xl:z-[-1] xl:w-[180px] xl:mt-[-80px] xl:ml-[780px]" src="line-design.svg"></img>
        <Image  draggable={false} className="x-auto ml-0  xl:w-[420px] xl:ml-[190px] xl:mt-[-120px]" src="/heroPerson.svg"
          height={50}
          width={250}
        ></Image>
        <MessageBox />
        <h1 className="text-center text-lg px-6 font-bold mt-20 ">While most of the features are packed in mobile application🔥 <br></br> <br></br> Try out our <b className="text-blue-500">Ambient sounds</b> for focus</h1>
        <button  className="border px-8 py-3 bg-black rounded-2xl my-10 font-semibold text-slate-200 flex mx-auto">Wishlist now!</button>
        <h1 className="text-2xl font-bold my-10 ml-8 xl:mx-[120px] xl:mt-[100px] bg-gradient-to-bl from-zinc-600 to-zinc-900 bg-clip-text text-transparent ">About Flamixy</h1>
        <p className="text-mg ml-4 border px-1  text-gray-500 border-white  xl:w-[1300px] w-[335px] xl:mx-[120px] xl:text-2xl">We believe that productivity should be empowering, enjoyable, and a little bit fun. Our mission is to provide you with the tools and features that not only enhance your work but also make the journey towards your goals a delightful one. Unleash your potential with Flamixy - where work meets play!</p>
        <h1 className="text-2xl font-bold my-10 ml-8 xl:mx-[120px] bg-gradient-to-bl from-zinc-600 to-zinc-900 bg-clip-text text-transparent  ">What sh*t Flamixy offer</h1>
        <div className="mx-[20px]">
        <FeaturesCard title={'Smart Focus Mode:'} description={'Dive into the zone with our Smart Focus Mode. Say goodbye to distractions, and hello to a more productive you.'} hero={"peep-90.svg"} bgcolor = "#121212"/>
        <FeaturesCard title={'Gamified Achievements:'} description={' Turn work into play with Flamixy gamified achievements. Earn badges and celebrate your victories. '} hero={'peep-82.svg'} />
        <FeaturesCard title={'Mood-Boosting Memes:'} description={'Take a break with our Mood-Boosting Memes during your Pomodoro breaks. Because productivity deserves a sprinkle of humor!'} hero={'peep-66.svg'} />
        <FeaturesCard title={'Personalized Q&A:'} description={'Ask ChatGPT anything! Flamixy seamlessly integrates ChatGPT, offering personalized question-and-answer sessions. Get instant answers to your queries.'} hero={'peep-76.svg'} />
        <h2 className="text-3xl font-bold my-10 ml-8 xl:mx-[120px] xl:mt-[100px] bg-gradient-to-bl from-slate-500 to-slate-900 bg-clip-text text-transparent xl:text-center ">Frequently Asked Questions:</h2>
        <FAQs question = 'How does Flamixy Focus Mode work?' answer='Smart Focus Mode minimize distractions, helping you concentrate on your tasks without interruption.'/>
        <FAQs question = ' Can I use Flamixy on both my computer and phone?' answer='Absolutely! Flamixy is designed for a seamless experience across desktop and mobile devices,ensuring your are always in sync.'/>
        <FAQs question = 'What sets Flamixy apart from other productivity apps?' answer='Flamixy goes beyond just productivity - it infuses a touch of humor with our Mood-Boosting Memes, AI integration for intelligent assistance   making work more enjoyable.'/>
        <FAQs question = 'How do I track my achievements on Flamixy?' answer='Navigate to the Achievements section to see your progress, earn badges, and turn your work into a rewarding game.'/>
        </div>
      </div>
      <footer className='py-[50px]'>
          <h1 className="text-center font-extrabold text-2xl">Flamixy</h1>
          <p className="text-center">The productive app</p>
          <p className="text-center  text-sm flex justify-center gap-1 items-center xl:text-md my-4">2024 deployed on <a className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent font-semibold text-xl" href="https://vercel.com/">Vercel</a> </p>
      </footer>
    </div>
  );
}
