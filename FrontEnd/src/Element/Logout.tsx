import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { LINK } from "../Set";

function Logout() {
    const navigate = useNavigate();
    console.log("tess");
    useEffect(() => {
        const apikey = localStorage.getItem('apikey');
       
        const fetchLogout = async () => { 
            try {
                const response = await axios.post(`${LINK}auth/logout`, null, {
                    headers: { "Authorization": `Bearer ${apikey}` }
                });
                localStorage.removeItem('apikey');
                navigate('/login');
                console.log(response);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchLogout();
    }, []);

    return null; // Komponen ini tidak merender apa pun, jadi kembalikan null
}

export default Logout;