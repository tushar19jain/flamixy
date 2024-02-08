export default function Navbar(){
    return(
        <div>
           <ul className = 'flex justify-between px-8 py-4 xl:px-12'>
                <li className = 'text-2xl font-semibold xl:text-3xl'>Flamixy</li>
               <button className = 'text-sm border-2 border-x-1 border-y-1 hover:bg-black hover:text-slate-300 hover:font-semibold transition-[0.2s] ease-in-out px-2 py-2 rounded-lg border-black xl:text-lg'>App coming soon</button>
           </ul>
        </div>
    )
}