import Navbar from "../Component/Navbar";
import images from "../assets/images.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LINK } from "../Set";

function Home() {
    const nav = useNavigate();
    const apikey = localStorage.getItem('apikey');
    const [FullName, SetName] = useState("");
    useEffect(() =>{
     console.log(apikey);
        if(!apikey){
            nav('/login');
            return
        }
       const fetch = async () => {
            const data = await axios.get(`${LINK}auth/get`,{headers: {"Authorization" : `Bearer ${apikey}`}});
            console.log(data.data.fullName)
            SetName(data.data.fullName);
        };
        fetch();
    },[]);


    const Skills = [
        'JavaScript',
        'React',
        'Node.js',
        'React',
        'Node.js',
        'React',
        'Node.js',
        'CSS',
        'HTML',
    ];

    return (
        <div>
            <Navbar/>
            <div className="flex flex-1 flex-col min-h-screen pt-20 px-4 lg:px-40 bg-gray-900 py-10">
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col md:flex-row mt-5 border-b border-white pb-10 items-center">
                        <img 
                            src={images} 
                            alt="" 
                            loading="lazy"
                            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover" 
                        />
                        
                        <div className="flex flex-col pt-5 md:pt-0 md:pl-6 max-w-full">
                            <h1 className="text-2xl md:text-3xl font-bold antialiased leading-9 text-white">{FullName}</h1>
                            <div className="flex flex-wrap sm:w-1/2 2xl:w-1/2  mt-3">
                                <div className="flex flex-wrap mt-2">
                                    {Skills.map((skill, index) => (
                                        <div 
                                            key={index}
                                            className="m-1 px-2 py-1 bg-green-800 text-xs text-white rounded-md"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <h1 className="border py-3 px-6 rounded-md border-white mt-5 text-center text-lg font-medium antialiased text-white cursor-pointer">
                            REPOSITORY
                        </h1>
                    </div>

                    <div className="flex flex-wrap justify-center w-full h-auto p-5">
                        <div className="flex flex-col p-5 w-full sm:w-3/4 md:w-2/5 h-auto m-3 rounded-md bg-white shadow-lg">
                            <h1 className="font-bold text-xl md:text-3xl text-gray-900 leading-9 antialiased">Project Title</h1>
                            <h2 className="mt-3 font-medium text-sm text-gray-900 antialiased leading-5 overflow-hidden">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum molestiae quos natus libero quia tempore.
                            </h2>
                        </div>
                        <div className="flex flex-col p-5 w-full sm:w-3/4 md:w-2/5 h-auto m-3 rounded-md bg-white shadow-lg">
                            <h1 className="font-bold text-xl md:text-3xl text-gray-900 leading-9 antialiased">Project Title</h1>
                            <h2 className="mt-3 font-medium text-sm text-gray-900 antialiased leading-5 overflow-hidden">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum molestiae quos natus libero quia tempore.
                            </h2>
                        </div>
                        <div className="flex flex-col p-5 w-full sm:w-3/4 md:w-2/5 h-auto m-3 rounded-md bg-white shadow-lg">
                            <h1 className="font-bold text-xl md:text-3xl text-gray-900 leading-9 antialiased">Project Title</h1>
                            <h2 className="mt-3 font-medium text-sm text-gray-900 antialiased leading-5 overflow-hidden">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum molestiae quos natus libero quia tempore.
                            </h2>
                        </div>
                        <div className="flex flex-col p-5 w-full sm:w-3/4 md:w-2/5 h-auto m-3 rounded-md bg-white shadow-lg">
                            <h1 className="font-bold text-xl md:text-3xl text-gray-900 leading-9 antialiased">Project Title</h1>
                            <h2 className="mt-3 font-medium text-sm text-gray-900 antialiased leading-5 overflow-hidden">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum molestiae quos natus libero quia tempore.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
