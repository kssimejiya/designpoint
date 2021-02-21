import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';


// import Building from './components/Building';
import Offices from './components/Offices';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Bungalow from './components/Bungalow';


function App() {
  return (
    <>

      <Navbar />
      <Switch
      >
        <Route path='/' exact component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/contactus' component={Contact} />
        <Route path='/bungalows' component={Bungalow} />
        {/* <Route path='/buildings' component={Building} /> */}
        <Route path='/offices' component={Offices} />
      </Switch>

    </>
  );
}

export default App;
