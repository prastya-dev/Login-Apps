import { useState, } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { LINK } from '../Set';
function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const history = useNavigate();



    const heanldeSubmit = async (e: any) => {
     e.preventDefault();
        try{
            const datt = await axios.post( `${LINK}auth/login`,{
                login : username,
                password : password
            })
            localStorage.setItem('apikey',datt.data);
            history('/')
        } catch(error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data.message);
            } 
            } 
    }
    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            <div className="flex min-h-screen flex-1 flex-col lg:justify-center px-6 py-12 lg:px-8 bg-gray-900">
                <div className="lg:mt-15 sm:mx-auto sm:mt-2 sm:w-full sm:max-w-sm bg-white-200 p-10 rounded-md shadow-3xl bg-white z-10 shadow-black">
                    <h2 className="text-center text-2xl font-bold text-gray-900 tracking-tight leading-9 mb-10">ARECH SERVER</h2>
                    <form action="#" className="space-y-1" method='POST' onSubmit={heanldeSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-9 text-gray-900">
                                Email/ Username
                            </label>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                autoComplete="email/Username"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                                className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 sm:text-sm shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-400 sm-leading-6 ring-1 ring-inset focus:ring-2 focus-ring-inset transition-all duration-200 ease-in-out"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-9 text-gray-900 mt-5">
                                Password
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                required
                                name="password"
                                autoComplete="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                id="password"
                                className="block w-full rounded-md border-0 px-2 shadow-sm py-2 text-gray-900 sm:text-sm leading-9 placeholder:text-gray-900 ring-gray-300 ring-1 ring-inset focus:ring-2 focus:ring-indigo-900 focus:ring-inset transition-all sm-leading-6 duration-200 ease-in-out"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="ml-2 flex items-center"
                            >
                                {passwordVisible ? <IoEyeOffOutline />  : <IoEyeOutline />}
                            </button>
                        </div> {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div>
                            <a href="#" className="block text-xs font-medium leading-6 text-indigo-600">
                                Forget Password?
                            </a>
                        </div>
                       
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign In
                            </button>
                        </div>
                        <div>
                            <p className="text-sm font-medium leading-6 text-gray-900 mt-5">
                                Don't Have an Account? <a href="regis" className="text-indigo-600">Sign Up</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
