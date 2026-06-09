import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Simulator from '../pages/Simulator';
import Results from '../pages/Results';
import About from '../pages/About';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import ResetPassword from '../pages/ResetPassword';
import ActivateAccountPage from '../pages/ActivateAccount';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/simulator" element={<Simulator />} />
            <Route path="/results" element={<Results />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/ativar/:token" element={<ActivateAccountPage />} />
        </Routes>
    );
}