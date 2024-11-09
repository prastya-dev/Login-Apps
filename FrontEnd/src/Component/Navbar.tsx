import { useState, useEffect, useRef } from "react";

function Navbar() {
    const iconLogout = 
    (<svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" viewBox="0 0 24 24" 
    strokeWidth={1.5}
     stroke="currentColor"
     className="lg:w-5 lg:h-5 w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
  </svg>);
  

    const [pop, setPop] = useState(false);
    const popref = useRef<HTMLDivElement | null>(null);
    function pushAcc(){
        setPop(true);
    }
    useEffect(() => {
        function heandleClick(event: MouseEvent){
            if (popref.current && !popref.current.contains(event.target as Node)) {
                setPop(false);
            }
        }
            
            document.addEventListener("mousedown", heandleClick)
            return () => {
                document.removeEventListener("mousedown" , heandleClick)
            }
        
    },[])
    
    return (
        <div>
            <div className="fixed flex flex-1 flex-row justify-between bg-gray-800 border-b-2 border-blue-300 shadow-lg w-screen px-12 py-5">
                <p className="text-blue-400 font-extrabold antialiased"><span className="text-white">Dashboard</span></p>
                <div className="flex flex-row text-white space-x-5">
                    {/* <a href="#"className="hover:text-blue-400 transition duration-200 ease-in-out">Home</a>
                    <a href="#"className="hover:text-blue-400 transition duration-200 ease-in-out">About</a>
                    <a href="#"className="hover:text-blue-400 transition duration-200 ease-in-out">Contact</a> */}
                </div>
                <button onClick={pushAcc} className="flex text-white hover:text-blue-400 transition duration-200 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
                </button>
            </div>
            {pop && (
                 <div ref={popref} className="animate-fall absolute w-1/4 lg:w-2/12 top-20 right-5 p-2 lg:top-20 lg:right-12 bg-white lg:p-4 text-xs lg:text-medium font-medium antialiased lg:text-medium shadow-lg rounded">
                 <div className="flex flex-row w-full space-x-2 items-center">
                 <a href="logout" className="p-1 flex items-center"> {iconLogout} <span className="ml-3">Logout</span></a>
                 </div>
             </div>
            )}
        </div>
    );
}


export default Navbar;


