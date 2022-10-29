import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import auth_services from "../../services/auth_services";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ErrorAlert from "../../alerts/errorAlert";
import Grid from '@mui/material/Grid';
import { Card, CardContent } from '@mui/material';
import { Link } from '@mui/material';
import FormInput from "../../components/form_input/FormInput";
import Loader from "../../components/loader/loader";
import auth_validation from "../../utils/auth_validation";

export default function SignIn() {
  // const {login, err, isLoading} = useLogin();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [loader, setLoader] = useState(false)

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError('')
    setPasswordError('')
    const { error, value } = auth_validation.emailValidation({ email })
    if (error) {
      setEmailError(error.details[0].message)
      if (password === '') {
        setPasswordError('Field should not be empty!')
      }
      return
    }

    try {
      setLoader(true)
      const response = await auth_services.fsLogin(email, password);
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
  }

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
                <FormInput label="Email" name="Email" value={email} setValue={setEmail} isValid={emailError ? true : false} />
                {emailError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{emailError}</Typography>}
                <FormInput label="Password" name="Password" value={password} setValue={setPassword} isValid={passwordError ? true : false} />
                {passwordError && <Typography variant="inherit" color="#d32f2f" sx={{ mt: 1 }}>{passwordError}</Typography>}
                <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }} fullWidth onClick={handleSubmit} >PROCEED</Button>
                {/* <Link sx={{textDecoration: 'none'}} href="/register-user" color="secondary">Register</Link> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      }
    </div>

    // <Container component="main" maxWidth="xs">
    //   <CssBaseline />
    //   <Box
    //     sx={{
    //       marginTop: 8,
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //       <LockOutlinedIcon />
    //     </Avatar>
    //     <Typography component="h1" variant="h5">
    //       Sign in
    //     </Typography>
    //     {error && <ErrorAlert custom_message={error}></ErrorAlert>}
    //     {/* {err && <div className="error">{err}</div>} */}
    //     <Box component="form"  noValidate sx={{ mt: 1 }}>
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         id="email"
    //         label="Email Address"
    //         name="email"
    //         autoComplete="email"
    //         autoFocus
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         name="password"
    //         label="Password"
    //         type="password"
    //         id="password"
    //         autoComplete="current-password"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <Button
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         onClick={handleSubmit}
    //         sx={{ mt: 3, mb: 2 }}
    //         // disabled={isLoading}
    //       >
    //         Sign In
    //       </Button>
    //     </Box>
    //   </Box>
    // </Container>
  );
}

