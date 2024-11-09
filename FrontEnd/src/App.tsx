import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Login from "./Element/Login";
import Home from "./Element/Home";
import AuthLayout from "./Layout/AuthLayout";
import SignUp from "./Element/SignUp";
import Logout from "./Element/Logout";
import  Chat  from "./Element/Chat";




const currentUser = { id: 1, name: "John Doe" };

const router = createBrowserRouter([
   {
    path : "/",
    element: <RootLayout />,
    children : [{
      path: "/",
      element: <Home />,
      children:[{
      
      },]
     },
     {
      path: "logout",
      element: <Logout/>
     },
     {
      path: "regis",
      element: <SignUp/>
     },
     {
     element: <AuthLayout/>,
     children:[{
      path: "login",
      element: <Login/>
     },
     
    ]
   },{

    path: "chat",
    element: <Chat currentUser={currentUser}/>
   }
  
  ]
   }
])
function App() {
 

  return <RouterProvider router={router}/>
}

export default App
