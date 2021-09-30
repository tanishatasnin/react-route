import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import React, { Components }  from 'react';
import Friendes from './Components/Friendes/Friendes';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter , Switch , Route, Link as NavLink } from 'react-router-dom';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      

<BrowserRouter>
<NavLink
 activeStyle={{
    fontWeight: "bold",
    color: "blue"
  }} className='home-page'
 to="/about" >About</NavLink>
<br />
<NavLink 
activeStyle={{
  fontWeight: "bold",
  color: "blue"
}} className='home-page'
 to="/home">Home</NavLink>
<NavLink 
activeStyle={{
  fontWeight: "bold",
  color: "blue"
}} className='home-page'
to="/friendes">friendes</NavLink>
<Switch>
  <Route path="/about">

    <NavLink></NavLink>
    <About></About>

  </Route>
  <Route path="/friendes">
    <Friendes></Friendes>
  </Route>
  <Route path="/friend/:friendId">
<FriendDetails></FriendDetails>
  </Route>
  <Route exact path="/">
<NotFound></NotFound>
  </Route>
  <Route path="/home">
<Home></Home>
  </Route>
  <Route exact path="*">
    <NotFound></NotFound>
  </Route>
</Switch>
</BrowserRouter>
<Footer></Footer>
    </div>
  );
}

export default App;
