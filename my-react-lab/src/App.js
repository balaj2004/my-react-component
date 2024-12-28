import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/navbar';
import Profile from './component/Userprofilepage'
import ProductDetail from './component/Productdetailedpage'
import ShoppingCartPage from './component/shoppingcartpage';
import ProductDetailPage from './component/Productdetailedpage';
const App = () => {
return (
    <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path = "/" element ={<Home/>} />
                <Route path = "/profile/:username" element ={<Profile/>} />
                <Route path = "/product/:id" element ={<ProductDetail/>} />
                <Route path = "/Shoppingcart" element ={<ShoppingCartPage/>} />
                <Route path = "/productdetail" element ={<ProductDetailPage/>} />
            </Routes>
        </div>
    </Router>

);
}
export default App;
