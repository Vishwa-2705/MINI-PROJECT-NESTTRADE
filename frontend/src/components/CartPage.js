import React from "react";
import { FaArrowLeft, FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";
import house1 from "../components/images/house1.jpg";
import house4 from "../components/images/house4.jpg";
import house8 from "../components/images/house8.jpg";
import house7 from "../components/images/house7.jpg";

import { useNavigate } from "react-router-dom";

export default function CartPage() {
const navigate = useNavigate();

  const styles = {
    phoneContainer: {
      width: "300px",
      minHeight: "620px",
      margin: "20px auto",
      border: "2px solid #000",
      borderRadius: "25px",
      overflow: "hidden",
      backgroundColor: "#fff",
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
    backIcon: { fontSize: "18px", cursor: "pointer", marginRight: "10px" },
    content: { padding: "15px" },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
      marginTop: "10px",
    },
    card: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      textAlign: "center",
    },
    image: { width: "100%", height: "100px", objectFit: "cover" },
    price: { fontSize: "12px", padding: "5px" },
    buyBtn: {
      width: "90%",
      margin: "20px auto",
      padding: "10px",
      borderRadius: "20px",
      backgroundColor: "black",
      color: "white",
      fontSize: "14px",
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
      display: "block",
    },
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

      {/* Header */}
      <div style={styles.header}>
        <FaArrowLeft style={styles.backIcon} onClick={() => window.history.back()} />
        <h3>My Add to Cart</h3>
      </div>

      {/* Content */}
      <div style={styles.content}>
        <div style={styles.grid}>
          <div style={styles.card}>
            <img src={house1} alt="House1" style={styles.image} />
            <p style={styles.price}>$500,000 – 123 Main St</p>
          </div>
          <div style={styles.card}>
            <img src={house4} alt="House4" style={styles.image} />
            <p style={styles.price}>$400,000 – 789 Oak Ave</p>
          </div>
          <div style={styles.card}>
            <img src={house8} alt="House8" style={styles.image} />
            <p style={styles.price}>$870,000 – 239 pot Ave</p>
          </div>
          <div style={styles.card}>
            <img src={house7} alt="House7" style={styles.image} />
            <p style={styles.price}>$650,000 – 456 kaveri St</p>
          </div>
        </div>

        <button onClick={() => navigate("/checkout-page")} style={styles.buyBtn}>Buy now!</button>
      </div>

      {/* Home Indicator */}
      <div style={styles.homeIndicator}></div>
    </div>
  );
}
