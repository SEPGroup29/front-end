import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormInput from "../../components/form_input/FormInput";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import auth_services from "../../services/auth_services";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ErrorAlert from "../../alerts/errorAlert";
import Loader from "../../components/loader/loader"

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [loader, setLoader] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoader(true)
      const response = await auth_services.adminLogin(email, password);
      console.log(response);
      if (response.status === 200) {
        //chnage page to dashboard
        if (response.data.result === "Logged in") {
          navigate('/fs-dashboard');
        }
        else if (response.data.error) {
          setError(response.data.error);
        }
      }
    } catch (error) {
      navigate('/503-error')
    }
    setLoader(false)
  };

  return (
    <div className="login">
      {loader && <Loader />}
      {!loader &&
        <Grid container minHeight="100vh" justifyContent="center" alignItems="center">
          <Grid item xs={10} md={5} paddingTop={2}>
            <Card sx={{ alignSelf: 'center', boxShadow: 12, borderRadius: 5 }} variant={"outlined"}>
              <CardContent>
                <Typography variant="h4">
                  Log in
                </Typography>
                <Typography variant="subtitle1">
                  FuelQ Management System
                </Typography>
                {error && <ErrorAlert custom_message={error}></ErrorAlert>}
                <FormInput label="Email" name="Email" setValue={email} />
                <FormInput label="Password" name="Password" setValue={password} />
                <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }} fullWidth onClick={handleSubmit} >PROCEED</Button>
                {/* <Link sx={{textDecoration: 'none'}} href="/register-user" color="secondary">Register</Link> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      }
    </div>

  );
}

