import AuthServices from '../../services/auth_services';
import {useEffect,useState } from 'react';
import Loader from "../loader/loader";
const Logout=()=>{
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    logout();
  },[])
  const logout = async () => {
    
    try {
      setLoader(true);
      const response = await AuthServices.logout();
      localStorage.clear();
      window.location.href="/";

    } catch (error) {
      localStorage.clear();
      window.location.href="/";
      
    }
    setLoader(false); 
    
  }
  if(loader){
    return <Loader/>
  }


}

export default Logout;