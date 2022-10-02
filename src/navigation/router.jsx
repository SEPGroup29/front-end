import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../views/admin_login/admin_login";
import Home from '../views/home/home';
import Login from '../views/login/login';
import VehicleOwnersList from '../views/vo_list/vo_list';
import FSDashboard from '../views/fs_dashboard/fs_dashboard';
import FuelStationList from '../views/fs_list/fs_list';
import VODashboard from '../views/vo_dashboard/vo_dashboard';
import LoginEnterOTP from '../views/login-enterOTP/login-enterOTP';
import RegisterUser from '../views/register_page/register_user';
import RegisterVehicle from "../views/register_vehicle/register_vehicle";
import RegisterFuelStation from "../views/register_fuel_station/register_fuel_station";
import UpdateFuelStock from '../views/update_fuel_stock/update_fuel_stock';
import FuelStations from "../views/fuel_stations/fuel_stations";
import VoDashboardNew from "../views/vo_dashbord_new/vo_dashbord_new"
import FuelStationLogin from "../views/fs_login/fs_login";

import NotFound from "../views/errors/404";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='/vo-list' element={<VehicleOwnersList />} />
                <Route path="/fs-dashboard" element={<FSDashboard />} />
                <Route path="/fs-list" element={<FuelStationList />} />
                <Route path="/vo-dashboard" element={<VODashboard />} />
                <Route path="/login-enter-otp" element={<LoginEnterOTP />} />
                <Route path="/register-user" element={<RegisterUser />} />
                <Route path="/register-vehicle" element={<RegisterVehicle />} />
                <Route path="/register-fuel-station" element={<RegisterFuelStation />} />
                <Route path="/update-fuel-stock" element={<UpdateFuelStock />} />
                <Route path="/fuel-stations" element={<FuelStations/>} />
                <Route path="/vo-dashboard-new" element={<VoDashboardNew />} />
                <Route path="/admin-login" element={<SignIn/>}/>
                <Route path="/fs-login" element={<FuelStationLogin/>} />    
                {/* 404 Error Page */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;