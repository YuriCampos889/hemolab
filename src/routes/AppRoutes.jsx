import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
// Importe a sua nova tela aqui. 
// (Ajuste o caminho '../pages/Viewer' dependendo de onde você salvou a pasta da tela)
import Viewer from '../pages/Viewer'; 
import Simulator from '../pages/Simulator'
import Results from '../pages//Results'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            
            {/* Adicione a nova rota aqui */}
            <Route path="/Viewer" element={<Viewer />} />

            <Route path="/Simulator" element={<Simulator />} />

            <Route path="/Results" element={<Results />} />


        </Routes>
    );
}