import './App.css';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Router from './navigation/router';
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    palette : {
        primary:{
            main : "#022B3A"
        },
        secondary:{
            main : "#1F7A8C"
        }
    }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className="app">
              <Navbar />
              <Router />
              <Footer />
          </div>
      </ThemeProvider>

  )
}

export default App;
