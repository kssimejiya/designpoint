import React from 'react'
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Bunglows from './components/Bunglows';
import Building from './components/Building';
import Offices from './components/Offices';
import Projects from './components/Projects';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <>

      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/bungalows' component={Bunglows} />
          <Route path='/buildings' component={Building} />
          <Route path='/offices' component={Offices} />
        </Switch>
      </AnimatePresence>

    </>
  );
}

export default App;
