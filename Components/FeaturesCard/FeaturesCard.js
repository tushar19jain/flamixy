export default function FeaturesCard({hero,title,description}){
    return(
        <div className= "flex flex-col bg-white shadow-2xl shadow-gray-300  py-20 px-5 mx-auto w-[300px] xl:w-[500px] rounded-3xl h-[400px] my-10">
            <img className="w-[150px] mt-[-80px] xl:w-[180px] bg-gradient-to-bl from-slate-500 to-slate-900 bg-clip-text text-transparent " src={hero}></img>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-gray-500 xl:text-xl">{description}</p>   
        </div>
    )
}