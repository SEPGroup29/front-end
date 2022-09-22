import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../views/home/home';
import Login from '../views/login/login';
import VODashboard from '../views/vo_dashboard/vo_dashboard';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='/vo_list' element={<VehicleOwnersList />} />
                <Route path="/fs_dashboard" element={<FSDashboard />} />
                <Route path="/fs_list" element={<FuelStaionList />} />
                <Route path="/vo_dashboard" element={<VODashboard />} />
                <Route path="/login-enterOTP" element={<LoginEnterOTP />} />
                <Route path="/register-user" element={<Register_user />} />
                <Route path="/register-vehicle" element={<Register_vehicle />} />
                <Route path="/register-fuel-station" element={<Register_fuel_station />} />
                <Route path="/update-fuel-stock" element={<Update_fuel_stock />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;