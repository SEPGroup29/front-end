import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from'../views/home/home';
import Login from '../views/login/login';
import VODashboard from '../views/vo_dashboard/vo_dashboard';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/vo-dashboard" element={<VODashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;