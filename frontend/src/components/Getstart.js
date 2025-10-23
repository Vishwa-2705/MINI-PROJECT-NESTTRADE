import React from "react";
import { FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";
import myhouse from "../components/images/house.jpg";
import { useNavigate } from "react-router-dom";

function Getstart() {
  const navigate = useNavigate();
  const styles = {
    phoneContainer: {
      width: "300px",
      minHeight: "600px",
      margin: "20px auto",
      border: "2px solid #000",
      borderRadius: "25px",
      overflow: "hidden",
      backgroundColor: "#fff",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    // Header bar with notch + icons OUTSIDE
    statusBar: {
      width: "90%",
      height: "30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 15px",
      fontSize: "12px",
      fontWeight: "bold",
      color: "#000",
      position: "relative",
    },
    notch: {
      width: "100px",
      height: "6px",
      backgroundColor: "black",
      borderRadius: "10px",
      position: "absolute",
      top: "5px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    iconGroup: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      color: "#000",
      zIndex: 2, // keeps icons above notch
    },
    contentWrapper: {
      marginTop: "20px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
    },
    heroImage: {
      width: "90%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "15px",
      margin: "10px 0 20px 0",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
      textAlign: "center",
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
    },
    subtitle: {
      fontSize: "14px",
      color: "#333",
      marginBottom: "20px",
      lineHeight: "1.5",
      textAlign: "center",
      padding: "0 10px",
    },
    button: {
      background: "black",
      color: "white",
      fontSize: "16px",
      padding: "10px 30px",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      transition: "0.3s ease",
      marginBottom: "60px",
    },
    // Footer with home indicator
    footerBar: {
      width: "100%",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      borderTop: "1px solid #ddd",
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    homeIndicator: {
      width: "100px",
      height: "6px",
      backgroundColor: "black",
      borderRadius: "3px",
    },
  };

  return (
    <div style={styles.phoneContainer}>
      {/* Status Bar */}
      <div style={styles.statusBar}>
        <span>9:41</span>
        <div style={styles.iconGroup}>
          <FaSignal />
          <FaWifi />
          <FaBatteryFull />
        </div>
        {/* Notch in center */}
        <div style={styles.notch}></div>
      </div>

      {/* Content */}
      <div style={styles.contentWrapper}>
        <img src={myhouse} alt="House" style={styles.heroImage} />

        <h1 style={styles.title}>Welcome to NestTrade!</h1>

        <p style={styles.subtitle}>
          We're here to make trading simple for you. Watch the markets live,
          anytime, anywhere. Grow your money step by step, at your pace. Tap Get
          Started and let's begin together!
        </p>

         <button
        style={styles.button}
        onClick={() => navigate("/login")}  // 👈 This navigates to Login page
        onMouseOver={(e) => (e.target.style.background = "#333")}
        onMouseOut={(e) => (e.target.style.background = "black")}
      >
        Get Start
      </button>
      </div>

      {/* Footer with Home Indicator */}
      <div style={styles.footerBar}>
        <div style={styles.homeIndicator}></div>
      </div>
    </div>
  );
}

export default Getstart;
