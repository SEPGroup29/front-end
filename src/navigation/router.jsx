import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "../utils/require_auth"
import SignIn from "../views/admin_login/admin_login";
import Home from '../views/home/home';
import Login from '../views/login/login';
import VehicleOwnersList from '../views/vo_list/vo_list';
import FSDashboard from '../views/fs_dashboard/fs_dashboard';
import FuelStationList from '../views/fs_list/fs_list';
import LoginEnterOTP from '../views/login-enterOTP/login-enterOTP';
import RegisterUser from '../views/register_page/register_user';
import RegisterVehicle from "../views/register_vehicle/register_vehicle";
import RegisterFuelStation from "../views/register_fuel_station/register_fuel_station";
import RegisterPumpOperator from "../views/register_pump_operator/register_pump_operator";
import UpdateFuelStock from '../views/update_fuel_stock/update_fuel_stock';
import FuelStations from "../views/fuel_stations/fuel_stations";
import VoDashboardNew from "../views/vo_dashbord_new/vo_dashbord_new"
import FuelStationLogin from "../views/fs_login/fs_login";
import AdminDashboard from "../views/admin_dashboard/admin_dashboard";
import NotFound from "../views/errors/404";
import ServiceUnavailable from "../views/errors/503";
import About from "../views/about/about";
import Logout from "../components/logout/logout";
import Unauthorized from "../views/unauthorized/unauthorized";
import FsDashboard from "../views/fs_dashboard/fs_dashboard";

const ROLES = {
    "ADMIN": 1,
    "VEHICLE_OWNER": 2,
    "FUEL_STATION_MANAGER": 3,
    "PUMP_OPERATOR": 4
}

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* General Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path='/vo-list' element={<RequireAuth allowedRoles={[ROLES.ADMIN]}><VehicleOwnersList /></RequireAuth>} />
                <Route path="/fs-dashboard" element={<RequireAuth allowedRoles={[ROLES.FUEL_STATION_MANAGER]}><FsDashboard /></RequireAuth>} />
                <Route path="/fs-list" element={<RequireAuth allowedRoles={[ROLES.ADMIN]}><FuelStationList /></RequireAuth>} />
                <Route path="/vo-dashboard" element={<RequireAuth allowedRoles={[ROLES.VEHICLE_OWNER]}><VoDashboardNew /></RequireAuth>} />
                <Route path="/login-enter-otp" element={<LoginEnterOTP />} />
                <Route path="/register-user" element={<RegisterUser />} />
                <Route path="/register-po" element={<RequireAuth allowedRoles={[ROLES.FUEL_STATION_MANAGER]}><RegisterPumpOperator /></RequireAuth>} />
                <Route path="/register-vehicle" element={<RequireAuth allowedRoles={[ROLES.VEHICLE_OWNER]}><RegisterVehicle /></RequireAuth>} />
                <Route path="/register-fuel-station" element={<RequireAuth allowedRoles={[ROLES.ADMIN]}><RegisterFuelStation /></RequireAuth>} />
                <Route path="/update-fuel-stock" element={<RequireAuth allowedRoles={[ROLES.FUEL_STATION_MANAGER]}><UpdateFuelStock /></RequireAuth>} />
                <Route path="/fuel-stations" element={<RequireAuth allowedRoles={[ROLES.VEHICLE_OWNER]}><FuelStations /></RequireAuth>} />
                <Route path="/admin-login" element={<SignIn />} />
                <Route path="/fs-login" element={<FuelStationLogin />} />
                <Route path="/admin-dashboard" element={<RequireAuth allowedRoles={[ROLES.ADMIN]}><AdminDashboard /></RequireAuth>} />

                {/* 404 Error Page */}
                <Route path="*" element={<NotFound />} />

                {/* Unauthorized page */}
                <Route path="/unauthorized" element={<Unauthorized />} />

                {/* 503 Error Page */}
                <Route path="/503-error" element={<ServiceUnavailable />} />

                {/* logout  */}
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;