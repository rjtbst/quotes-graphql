import Home from "./components/Home";
import Profile from './components/Profile';
 import Signup from './components/Signup';
import Login from './components/Login';
import CreateQuote from './components/CreateQuote';

export const routes = [
    {path:"/", element:<Home/>},
    {path:"/login", element:<Login/>},
    {path:"/signup", element:<Signup/>},
    {path:"/profile", element:<Profile/>},
    {path:"/createQuote", element:<CreateQuote/>}
]