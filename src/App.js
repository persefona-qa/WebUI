


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from "./components/menu/Menu";
import { Routes, Route } from "react-router-dom";
import AboutComponent from "./components/about-component/about-component";
import ListComponents from "./components/list-component/list-components";
import BasketComponent from './components/basket-component/BasketComponent';



function App() {
    

    return (


        
            <section className="app">
                <header className="app-header">
                    <Menu />
                </header>
                
            <Routes>
                <Route path="/bin" element={<BasketComponent />} />
                    <Route path="/about" element={<AboutComponent/>} />
                    <Route path="/" element={<ListComponents/>} />
                 </Routes>

            </section>
        
    );
}

export default App;

