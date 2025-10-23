import React from "react";
import { FaSignal, FaWifi, FaBatteryFull, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import house1 from "../components/images/house1.jpg";
import { useNavigate } from "react-router-dom";


export default function HouseDetails() {
const navigate = useNavigate();

  const styles = {
    phoneContainer: {
      width: "300px",
      minHeight: "650px",
      margin: "20px auto",
      border: "2px solid #000",
      borderRadius: "25px",
      overflow: "hidden",
      backgroundColor: "#fff",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      fontFamily: "'Poppins', sans-serif",
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
      position: "relative",
    },
    notch: {
      width: "100px",
      height: "6px",
      backgroundColor: "black",
      borderRadius: "8px",
      position: "absolute",
      top: "10px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    header: {
      display: "flex",
      alignItems: "center",
      padding: "10px 15px",
      borderBottom: "1px solid #eee",
    },
    backIcon: {
      fontSize: "18px",
      cursor: "pointer",
      marginRight: "10px",
    },
    headerTitle: { fontSize: "16px", fontWeight: "bold" },
    searchBar: {
      margin: "10px auto",
      width: "85%",
      padding: "8px 12px",
      borderRadius: "20px",
      border: "1px solid #ccc",
      fontSize: "14px",
      outline: "none",
      display: "block",
    },
    content: {
      padding: "15px",
      flex: 1,
      overflowY: "auto",
    },
    houseImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "15px",
    },
    title: { fontSize: "20px", fontWeight: "bold", margin: "10px 0 5px" },
    price: { fontSize: "18px", fontWeight: "bold", color: "#333" },
    descriptionTitle: { fontSize: "16px", fontWeight: "bold", marginTop: "10px" },
    description: { fontSize: "14px", color: "#555", lineHeight: "1.5" },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "15px",
      marginBottom:"10px",
    },
    button: {
      flex: 1,
      padding: "10px",
      borderRadius: "20px",
      border: "none",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    addToCart: {
      backgroundColor: "black",
      color: "white",
      marginRight: "10px",
    },
    buyNow: { backgroundColor: "black", color: "white" },
    homeIndicator: {
      width: "100px",
      height: "6px",
      backgroundColor: "black",
      borderRadius: "3px",
      position: "absolute",
      bottom: "10px",
      left: "32%",
    },
  };

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

      {/* Header with Back Arrow */}
      <div style={styles.header}>
        <FaArrowLeft style={styles.backIcon} onClick={() => window.history.back()} />
        <span style={styles.headerTitle}>House Details</span>
      </div>

      {/* Search Bar */}
      <input type="text" placeholder="Search houses..." style={styles.searchBar} />

      {/* Content */}
      <div style={styles.content}>
        <img src={house1} alt="Modern Family House" style={styles.houseImage} />

        <center><h2 style={styles.title}>Modern Family House</h2></center>
        <p>
          <FaMapMarkerAlt /> 1234 Elm St, Springfield
        </p>
        <p style={styles.price}>$450,000</p>

        <h3 style={styles.descriptionTitle}>Description</h3>
        <p style={styles.description}>
          A beautiful 3-bedroom, 2-bathroom home with modern amenities and a
          spacious garden. Perfect for families who love comfort and elegance.
        </p>

        {/* Buttons */}
        <div style={styles.buttonContainer}>
          <button  onClick={() => navigate("/cart")} style={{ ...styles.button, ...styles.addToCart }}>
            Add to cart
          </button>
          <button onClick={() => navigate("/checkout-page")} style={{ ...styles.button, ...styles.buyNow }}>Buy now!</button>
        </div>
      </div>

      {/* Home Indicator */}
      <div style={styles.homeIndicator}></div>
    </div>
  );
}
