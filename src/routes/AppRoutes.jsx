import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Viewer from '../pages/Viewer'; 
import Simulator from '../pages/Simulator'
import Results from '../pages//Results'
import About from '../pages/About'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            
            <Route path="/Viewer" element={<Viewer />} />

            <Route path="/Simulator" element={<Simulator />} />

            <Route path="/Results" element={<Results />} />

            <Route path="/About" element={<About />} />


        </Routes>
    );
}