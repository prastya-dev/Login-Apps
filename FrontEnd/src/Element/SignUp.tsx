import Formss from "../Component/Formss";
import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LINK } from "../Set";


function SignUp(){
    const [pop, Setpop] = useState(false);
    const [pop1, Setpop1] = useState(true);
    const [username, setun] = useState("");
    const [Firstname, setFirst] = useState("");
    const [Lastname, setLast] = useState("");
    const [Password, setPass] = useState("");
    const [Cpass, setCpass] = useState("");
    const [Email, setEm] = useState("");
    const [ErrorMessage, setError] = useState ("");
    const navigate = useNavigate();
    const link = LINK;



    const onPop = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!username || !Firstname || !Password || !Cpass || !Email){
            return
        }
        if(Cpass !== Password){
        setError("Passwords do not match!")
        return
    }
     

        setError("");
        Setpop(true) ;
    }





    function ofPop(){
        Setpop(false)
    }
       const heandleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            Setpop(false);
            try{
                const data = await axios.post(`${link}auth/reg`, {
                    username : username,
                    password : Password,
                    first_name : Firstname,
                    last_name : Lastname,
                    email : Email
                })
                console.log(data);
               }catch(error) {
                if (axios.isAxiosError(error)) {
                    setError(error.response?.data.message);
                    return
                } 
                } 
            Setpop1(false);
            
            setTimeout(() => {
                navigate("/login");
            },3000)
          }

        
    
    


    return(
        <div>
          
           <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900" >
              {pop1 && (
            
            <div className="mt-15 sm:mx-auto sm:w-full sm:max-w-sm bg-white-200 p-10 rounded-md shadow-3xl bg-white z-10 shadow-black" >
              
                <h2 className="text-center text-2xl font-bold text-gray-900 tracking-tight leading-9 mb-10">SIGN UP</h2>
                <form action="#" className="space-y-1" method="POST" onSubmit={onPop}>
                   
                    <Formss
                        
                        title={"FirstName"} 
                        requiredd={true}
                        onChangee={(e: SetStateAction<string>) => setFirst(e)}
                        val={Firstname}
                    />
                    <Formss
                    type="text"
                    title={"LastName"} 
                    requiredd={false}
                    onChangee={(e: SetStateAction<string>) => setLast(e)}
                    val={Lastname}
                    />
                    <Formss
                    type="text"
                    title={"Username"}
                    onChangee={(e: SetStateAction<string>) => setun(e)}
                    val={username}/>
                    <Formss
                    type="email"
                    title={"Email"}
                    onChangee={(e: SetStateAction<string>) => setEm(e)}
                    val={Email}
                    />
                    <Formss
                    type="text"
                    title={"Password"}
                    onChangee={(e: SetStateAction<string>) => setPass(e)}
                    val={Password}
                    />
                    <Formss
                    type="password"
                    title={"Confirm Passsword"}
                    onChangee={(e: SetStateAction<string>) => setCpass(e)}
                    val={Cpass}
                    />
                    <h1 className="text-red-500 font-sm text-xs italic antialiased">{ErrorMessage}</h1>
                     

               
                <div>
                        <button
                        type="submit"
                        
                        className="flex w-full justify-center mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign Up
                        </button>
                       
                    </div>
                     </form>
            </div>
         )}
          
               
               {!pop1 && (
                <div className="mt-15 sm:mx-auto sm:w-full sm:max-w-xl bg-white-200 p-10 rounded-md shadow-3xl bg-white z-10 shadow-black" >
                    <h2 className="text-center text-2xl font-bold text-gray-900 tracking-tight leading-9 mb-10">Sign up successful! Redirecting to the login page…</h2>
                </div>
               )} 
               </div>


                {pop && (
                    <div className="flex fixed justify-center items-center z-20 inset-0 bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-9/12 sm:w-3/4 md:w-1/2 lg:w-1/5 animate-zoom-in">
                            <h1 className="font-medium antialiased text-3xl text-center ">Are you sure?</h1>
                            <h1 className="font-sm antialiased text-xs text-center leading-2 mt-3">If you want to continue with this registration, make sure your data is correct</h1>
                           
                           
                            <div className="flex mb-1 mt-10 h-1/4 w-full flex-row justify-between px-5 items-center">
                            <button 
                            className="flex w-2/5 h-3/4 bg-red-700 p-3 leanding-2 rounded-md shadow-lg items-center font-bold text-sm justify-center text-white"
                            onClick={ofPop}
                            >Cancel</button>
                            <button
                             className="flex w-2/5 h-3/4 bg-blue-700 p-3 rounded-md shadow-lg shadow-lg items-center font-bold text-sm justify-center text-white"
                             onClick={heandleClick}
                             >Confirm</button>
                            </div>
                        </div>
                    </div>
                ) }

        </div>
    )
}

export default SignUp;