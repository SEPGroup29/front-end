import './App.css';
import Home from './views/home/home';
import Login from './views/login/login';
import VehicleOwnersList from './views/vo_list/vo_list';
import FSDashboard from './views/fs_dashboard/fs_dashboard';
import FuelStaionList from './views/fs_list/fs_list';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/vo_list' element={<VehicleOwnersList/>} />
        <Route path="/fs_dashboard" element={<FSDashboard />} />
        <Route path="/fs_list" element={<FuelStaionList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
