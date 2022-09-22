import './App.css';
import Home from './views/home/home';
import Login from './views/login/login';
<<<<<<< HEAD
import VehicleOwnersList from './views/vo_list/vo_list';
import FSDashboard from './views/fs_dashboard/fs_dashboard';
import FuelStaionList from './views/fs_list/fs_list';
=======
import VODashboard from './views/vo_dashboard/vo_dashboard';
import LoginEnterOTP from "./views/login-enterOTP/login-enterOTP";
import Register_user from "./views/register_page/register_user";
import Register_vehicle from "./views/register_vehicle/Register_vehicle";
import Register_fuel_station from "./views/register_fuel_station/register_fuel_station";
import Update_fuel_stock from "./views/update_fuel_stock/update_fuel_stock";
>>>>>>> 96bf79709ebb818fa37ed5246a7635bbdc6a296d
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path='/vo_list' element={<VehicleOwnersList/>} />
        <Route path="/fs_dashboard" element={<FSDashboard />} />
        <Route path="/fs_list" element={<FuelStaionList/>} />
=======
        <Route path="/vo_dashboard" element={<VODashboard />} />
        <Route path="/login-enterOTP" element={<LoginEnterOTP />} />
        <Route path="/register-user" element={<Register_user />} />
        <Route path="/register-vehicle" element={<Register_vehicle />} />
        <Route path="/register-fuel-station" element={<Register_fuel_station />} />
        <Route path="/update-fuel-stock" element={<Update_fuel_stock />} />
>>>>>>> 96bf79709ebb818fa37ed5246a7635bbdc6a296d
      </Routes>
    </BrowserRouter>
  );
}

export default App;
