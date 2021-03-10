import React, {useEffect, useState, useLayoutEffect} from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import {Switch, Route, useLocation} from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';
import Homes from './pages/Homes';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
const [isOpen, setIsOpen] = useState(false);
const location = useLocation();

const toggle = () => {
  setIsOpen(!isOpen);
};

useLayoutEffect(() => {
  window.scrollTo(0,0);
}, [location.pathname]);

useEffect(() => {
  Aos.init({});
}, []);

  return (
    <>
    <GlobalStyle/>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Switch>
      <Route path="/React-rentalHouse-Web" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/homes" exact component={Homes}/>
      <Route path="/rentals" exact component={Rentals}/>
      <Route path="/contact" exact component={Contact}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
