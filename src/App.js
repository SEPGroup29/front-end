import './App.css';
import Home from './views/home/home';
import Login from './views/login/login';
import VODashboard from './views/vo_dashboard/vo_dashboard';
import LoginEnterOTP from "./views/login-enterOTP/login-enterOTP";
import Register_user from "./views/register_page/register_user";
import Register_vehicle from "./views/register_vehicle/Register_vehicle";
import Register_fuel_station from "./views/register_fuel_station/register_fuel_station";
import Update_fuel_stock from "./views/update_fuel_stock/update_fuel_stock";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
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

export default App;
