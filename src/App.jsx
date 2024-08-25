import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
// import Home from './components/Home';
// import LoginPage from './components/Login';
// import RegisterPage from './components/Register';

const App = () => {
  return (
    <div>
      <Navbar />
      <Pizza />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Footer />
    </div>
  );
};

export default App;
