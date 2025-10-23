import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaSignal,
  FaWifi,
  FaBatteryFull,
} from "react-icons/fa";

export default function RoleSelection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  // ---------- Styles ----------
  const styles = {
    phoneContainer: {
      width: "300px",
      minHeight: "600px",
      margin: "20px auto",
      border: "2px solid #000",
      borderRadius: "25px",
      overflow: "hidden",
      backgroundColor: "#ffffff",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      fontFamily: "'Poppins', sans-serif",
    },
    iconGroup: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      color: "#000",
      zIndex: 2,
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
    homeIndicator: {
      width: "100px",
      height: "6px",
      backgroundColor: "black",
      borderRadius: "3px",
      position: "absolute",
      bottom: "10px",
    },
    card: (isHovered, isSelected) => ({
      width: "80px",
      padding: "20px",
      border: isSelected ? "2px solid black" : "1px solid #000",
      borderRadius: "12px",
      backgroundColor: isHovered ? "#e0e0e0" : "#fff",
      boxShadow: isHovered
        ? "0 6px 12px rgba(0,0,0,0.2)"
        : "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      marginTop: "20px",
      cursor: "pointer",
      transform: isHovered ? "scale(1.05)" : "scale(1)",
      transition: "all 0.3s ease",
    }),
  };

  // ---------- Button click handler ----------
  const handleContinue = () => {
    if (selectedRole === "buyer") {
      navigate("/buyer-dashboard");
    } else if (selectedRole === "seller") {
      navigate("/seller-dashboard");
    } else {
      alert("⚠️ Please select a role first!");
    }
  };

  // ---------- UI ----------
  return (
    <div style={styles.phoneContainer}>
      {/* Status Bar */}
      <div style={styles.statusBar}>
        <div style={{ flex: 1, textAlign: "left" }}>9:41</div>
        <div style={styles.iconGroup}>
          <FaSignal />
          <FaWifi />
          <FaBatteryFull />
        </div>
        <div style={styles.notch}></div>
      </div>

      {/* Main Content */}
      <div style={{ textAlign: "center", padding: "20px", flex: 1 }}>
        <h2 style={{ marginBottom: "10px" }}>NestTrade</h2>
        <h3 style={{ marginBottom: "10px" }}>Welcome to NestTrade!</h3>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          Tell Us Who You Are
        </p>

        {/* Role Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          {/* Buyer Card */}
          <div
            style={styles.card(
              hoveredCard === "buyer",
              selectedRole === "buyer"
            )}
            onMouseEnter={() => setHoveredCard("buyer")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setSelectedRole("buyer")}
          >
            <FaHome size={40} style={{ marginBottom: "10px" }} />
            <h4 style={{ margin: "5px 0" }}>I’m a Buyer</h4>
            <p style={{ fontSize: "12px", color: "#555" }}>
              I want to explore and purchase properties.
            </p>
          </div>

          {/* Seller Card */}
          <div
            style={styles.card(
              hoveredCard === "seller",
              selectedRole === "seller"
            )}
            onMouseEnter={() => setHoveredCard("seller")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setSelectedRole("seller")}
          >
            <FaBuilding size={40} style={{ marginBottom: "10px" }} />
            <h4 style={{ margin: "5px 0" }}>I’m a Seller</h4>
            <p style={{ fontSize: "12px", color: "#555" }}>
              I want to list and manage properties.
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <button
          style={{
            width: "80%",
            padding: "12px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "25px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>

      {/* Home Indicator */}
      <div style={styles.homeIndicator}></div>
    </div>
  );
}
