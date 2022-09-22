import './App.css';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Router from './navigation/router';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router />
      <Footer />
    </div>
  )
}

export default App;
