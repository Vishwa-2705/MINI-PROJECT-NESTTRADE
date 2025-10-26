import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignal, FaWifi, FaBatteryFull, FaArrowLeft } from "react-icons/fa";
import house1 from "../components/images/house1.jpg";
import house2 from "../components/images/house2.jpg";
import house3 from "../components/images/house3.jpg";
import house5 from "../components/images/house5.jpg";
import house6 from "../components/images/house6.jpg";
import house7 from "../components/images/house7.jpg";
import house8 from "../components/images/house8.jpg";

export default function BuyerDashboard() {
  const [activeMenu, setActiveMenu] = useState("All");
  const [filter, setFilter] = useState(""); // For bottom filter buttons
  const navigate = useNavigate();

  const styles = {
    phoneContainer: {
      width: "340px",
      minHeight: "200px",
      margin: "20px auto",
      border: "2px solid #000",
      borderRadius: "25px",
      overflow: "hidden",
      backgroundColor: "#fff",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      fontFamily: "'Poppins', sans-serif"
    },
    statusBar: {
      width: "90%",
      height: "30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 10px",
      fontSize: "12px",
      fontWeight: "bold",
      color: "#000",
      backgroundColor: "#fff",
      position: "relative"
    },
    notch: {
      width: "100px",
      height: "6px",
      backgroundColor: "black",
      borderRadius: "8px",
      position: "absolute",
      top: "10px",
      left: "50%",
      transform: "translateX(-50%)"
    },
    homeIndicator: {
      width: "100px",
      height: "6px",
      backgroundColor: "black",
      borderRadius: "3px",
      position: "absolute",
      bottom: "10px",
      left: "32%"
    },
    menuBar: {
      display: "flex",
      gap: "6px",
      marginBottom: "10px",
      overflowX: "auto"
    },
    menuItem: (active) => ({
      padding: "5px 12px",
      borderRadius: "15px",
      border: active ? "1px solid #000" : "1px solid #ccc",
      background: active ? "#000" : "#fff",
      color: active ? "#fff" : "#000",
      fontSize: "13px",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }),
    propertyCard: {
      minWidth: "140px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      background: "#fff",
      cursor: "pointer"
    }
  };

  // House data
  const houses = [
    { img: house1, price: 500000, address: "123 Main St", type: "Apartment" },
    { img: house2, price: 400000, address: "789 Oak Ave", type: "Villa" },
    { img: house5, price: 570000, address: "kaveri St", type: "Apartment" },
    { img: house6, price: 470000, address: "ask st", type: "Villa" },
    { img: house7, price: 870000, address: "kvp St", type: "Villa" },
    { img: house8, price: 440000, address: "pot ws st", type: "Apartment" }
  ];

  // Filter houses based on menu and bottom filter buttons
  let filteredHouses = houses.filter((house) => {
    if (activeMenu === "All" || activeMenu === "chatbox") return true;
    if (activeMenu === "Apartments") return house.type === "Apartment";
    if (activeMenu === "Villas") return house.type === "Villa";
    return true;
  });

  // Apply bottom filter buttons
  if (filter === "price") filteredHouses.sort((a, b) => a.price - b.price);
  if (filter === "location") filteredHouses.sort((a, b) => a.address.localeCompare(b.address));
  if (filter === "typeApartment") filteredHouses = filteredHouses.filter(h => h.type === "Apartment");
  if (filter === "typeVilla") filteredHouses = filteredHouses.filter(h => h.type === "Villa");

  return (
    <div style={styles.phoneContainer}>
      {/* Status Bar */}
      <div style={styles.statusBar}>
        <div style={{ flex: 1, textAlign: "left" }}>11:11 AM</div>
        <div style={{ flex: 1, textAlign: "center" }}></div>
        <div style={{ display: "flex", gap: "8px" }}>
          <FaSignal />
          <FaWifi />
          <FaBatteryFull />
        </div>
        <div style={styles.notch}></div>
      </div>

      {/* Header */}
      <div style={{ padding: "15px" }}>
        <FaArrowLeft style={{ cursor: "pointer" }} onClick={() => window.history.back()} />
        <h3 style={{ margin: "5px 0" }}>Hi, Buyer 👋</h3>
        <p style={{ margin: "0", fontSize: "14px", color: "#555" }}>Ready to find your dream property?</p>
      </div>

      {/* Search */}
      <div style={{ padding: "0 15px", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search by location, price, or property type"
          style={{ width: "90%", padding: "10px", borderRadius: "20px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Featured Properties */}
      <div style={{ padding: "0 15px" }}>
        <h4 style={{ marginBottom: "10px" }}>Featured Properties</h4>

        {/* Menu Bar */}
        <div style={styles.menuBar}>
          {["All", "Apartments", "Villas", "chatbox"].map((item) => (
            <div key={item} style={styles.menuItem(activeMenu === item)} onClick={() =>{
        if (item === "chatbox") navigate("/chatbot"); // go to chatbot page
        else setActiveMenu(item); // update active menu only for house types
      }}
    >
              {item}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "10px" }}>
          {filteredHouses.map((house, idx) => (
            <div key={idx} style={styles.propertyCard} onClick={() => navigate("/house-details")}>
              <img src={house.img} alt={`House ${idx}`} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
              <p style={{ padding: "5px", fontSize: "12px" }}>${house.price.toLocaleString()} – {house.address}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Section */}
      <div style={{ padding: "0 15px", marginTop: "2px" }}>
        <h4>Recommended for You</h4>
        <div
          style={{ display: "flex", border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", marginTop: "10px", background: "#f9f9f9", cursor: "pointer" }}
          onClick={() => navigate("/house-details")}
        >
          <img src={house3} alt="House Recommend" style={{ width: "120px", height: "100px", marginTop: "10px", objectFit: "cover" }} />
          <div style={{ padding: "10px" }}>
            <h3 style={{ margin: "0", fontSize: "18px" }}>$350,000</h3>
            <p style={{ margin: "0", fontSize: "14px" }}>456 Elm St</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px", marginBottom: "50px", padding: "0 10px" }}>
        <button style={{ border: "1px solid #ccc", borderRadius: "15px", padding: "5px 10px", background: "#fff", cursor: "pointer" }} onClick={() => setFilter("price")}>
          By Price
        </button>
        <button style={{ border: "1px solid #ccc", borderRadius: "15px", padding: "5px 10px", background: "#fff", cursor: "pointer" }} onClick={() => setFilter("location")}>
          Location
        </button>
        <button
          style={{ border: "1px solid #ccc", borderRadius: "15px", padding: "5px 10px", background: "#fff", cursor: "pointer" }}
          onClick={() => {
            if (!filter || filter === "typeVilla") setFilter("typeApartment");
            else if (filter === "typeApartment") setFilter("typeVilla");
            else setFilter("");
          }}
        >
          House Type
        </button>
      </div>

      {/* Home Indicator */}
      <div style={styles.homeIndicator}></div>
    </div>
  );
}
