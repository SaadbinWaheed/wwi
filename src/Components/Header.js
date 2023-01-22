import { AppBar, Toolbar } from '@material-ui/core';
import * as React from 'react';


import logo from '../Assets/logo.png';
import Tabs from './TabComponent/Tabs.js'

export default function Header({setCurrentTab, currentTab}) {
  console.log(currentTab)
    return (
        <AppBar className="Toolbar" position="static">
          <div className="Header">
            {/*Inside the IconButton, we 
             can render various icons*/}
            <img  onClick={()=>setCurrentTab(0)} className="Logo" src={logo} alt="logo" />
            {/* The Typography component applies 
             default font weights and sizes */}
             <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab}/>
          </div>
        </AppBar>
    );
  }