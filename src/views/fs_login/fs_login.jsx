import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import auth_services from "../../services/auth_services";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ErrorAlert from "../../alerts/errorAlert";
// import { useLogin } from '../../hooks/use_login';

const theme = createTheme();

export default function SignIn() {
  // const {login, err, isLoading} = useLogin();
  const navigation = useNavigate();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // await login(email, password)
    const response = await auth_services.fsLogin(email,password);
    console.log(response);
    if(response.status === 200 ){
       //chnage page to dashboard
      if(response.data.result === "Logged in"){
        navigation('/fs-dashboard');
      }
      else if(response.data.error){
        setError(response.data.error);
      }
    } 
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {error && <ErrorAlert custom_message={error}></ErrorAlert>}
          {/* {err && <div className="error">{err}</div>} */}
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
              // disabled={isLoading}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

