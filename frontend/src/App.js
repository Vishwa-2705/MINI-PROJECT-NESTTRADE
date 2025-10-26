import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Getstart from "./components/Getstart";
import Login from "./components/Login";
import RoleSelection from "./components/RoleSelection";
import BuyerDashboard from "./components/BuyerDashboard";
import SellerDashboard from "./components/SellerDashboard";
import HouseDetails from "./components/HouseDetails";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import PropertySuccess from "./components/PropertySuccess"; // ✅ Fixed
import Chatbot from "./components/Chatbot";  // correct path
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Getstart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/house-details" element={<HouseDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout-page" element={<CheckoutPage />} />
        <Route path="/property-success" element={<PropertySuccess />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
