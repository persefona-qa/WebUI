

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from "./components/menu/Menu";
//import ShopCard from "./components/shop-card/ShopCard";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
//import {  } from "react-router-dom";
import BinComponent from "./components/bin-component/bin-component";
import AboutComponent from "./components/about-component/about-component";
import ListComponents from "./components/list-component/list-components";


// Importing images from assets directory
import stephenKingImage from './assets/1.png';
import jkRowlingImage from './assets/2.png';
import tessGerritsenImage from './assets/3.png';
import georgeRRMartinImage from './assets/4.png';
import clashOfKingsImage from './assets/5.png';
import janeEyreImage from './assets/6.png';

function App() {
    

    return (
        
            <section className="app">
                <header className="app-header">
                    <Menu />
                </header>
                
                <Routes>
                    <Route path="/bin" element={<BinComponent/>} />
                    <Route path="/about" element={<AboutComponent/>} />
                    <Route path="/" element={<ListComponents/>} />
                 </Routes>

            </section>
        
    );
}

export default App;

