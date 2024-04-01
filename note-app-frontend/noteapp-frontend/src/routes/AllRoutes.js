import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Notespage from "../pages/Notespage";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes(){
    return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/notes" element={<Notespage/>}/> */}
        <Route path="/notes" element={<PrivateRoute><Notespage/></PrivateRoute>}/>
    </Routes>)
}