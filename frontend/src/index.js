import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import Homepage from './landing_page/home/HomePage';
import Aboutpage from './landing_page/about/AboutPage';
import Pricingpage from './landing_page/pricing/PricingPage';
import Productpage from './landing_page/product/Productpage';
import Signup from './landing_page/signup/Signup';
import Supportpage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/Notfound';
import 'react-toastify/dist/ReactToastify.css'

import Login from './landing_page/signup/Login';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navbar/>
    <Routes>
       <Route path="/" element={<Homepage/>}></Route>

       <Route path="/about" element={<Aboutpage/>}></Route>
       <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       <Route path="/pricing" element={<Pricingpage/>}></Route>
       <Route path="/product" element={<Productpage/>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>
       <Route path="/support" element={<Supportpage/>}></Route>
       <Route path="*" element={<Notfound/>}></Route>

       
    </Routes>
    <Footer/>
</BrowserRouter>
);



