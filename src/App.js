import './App.css';
import Home from './views/home/home';
import Login from './views/login/login';
import VehicleOwnersList from './views/vo_list/vo_list';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/vo_list' element={<VehicleOwnersList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
