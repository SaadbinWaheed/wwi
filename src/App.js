import logo from './logo.svg';
import './Styles/App.css';
import Header from './Components/Header';
import { useState } from 'react';
import { Home } from './Components/AllTabs/Home';
import  Footer from './Components/AllTabs/Footer';
import { GetInTouch } from './Components/AllTabs/GetInTouch';
import { BrowserRouter as Router, Route } from '@mui/icons-material';
function App() {
  <Router>
    <Route path = "./Component/AllTabs/Home" component ={HomePage} exact />
  </Router>
}

export default App;
