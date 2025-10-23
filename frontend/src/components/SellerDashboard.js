
import React from "react";
import { FaArrowLeft, FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SellerDashboard() {
  const navigate = useNavigate();

  const styles = {
    phoneContainer: {
      width: "310px",
      minHeight: "600px", // 🔽 Reduced height from 600px → 520px
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
      height: "28px", // 🔽 Slightly smaller
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 10px",
      fontSize: "11px",
      fontWeight: "bold",
      color: "#000",
      backgroundColor: "#fff",
      position: "relative",
    },
    notch: {
      width: "90px",
      height: "5px",
      backgroundColor: "black",
      borderRadius: "8px",
      position: "absolute",
      top: "9px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    homeIndicator: {
      width: "90px",
      height: "5px",
      backgroundColor: "black",
      borderRadius: "3px",
      position: "absolute",
      bottom: "8px",
      left: "35%",
    },
    input: {
      width: "90%",
      padding: "7px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      marginTop: "5px",
      background: "#f2f2f2",
    },
    label: {
      fontWeight: "bold",
      fontSize: "12px",
      marginTop: "8px",
      display: "block",
    },
  };

  return (
    <div style={styles.phoneContainer}>
      {/* Status Bar */}
      <div style={styles.statusBar}>
        <div style={{ flex: 1, textAlign: "left" }}>11:11 AM</div>
        <div style={{ flex: 1, textAlign: "center" }}></div>
        <div style={{ display: "flex", gap: "5px" }}>
          <FaSignal />
          <FaWifi />
          <FaBatteryFull />
        </div>
        <div style={styles.notch}></div>
      </div>

      {/* Header */}
      <div style={{ padding: "8px 15px", display: "flex", alignItems: "center" }}>
        <FaArrowLeft style={{ marginRight: "8px", cursor: "pointer" }} />
        <h3 style={{ margin: 0, fontSize: "15px" }}>Welcome Seller 👋</h3>
      </div>
      <p style={{ margin: "0 15px", fontSize: "12px", color: "#555" }}>
        Sell Your Property with Ease!
      </p>

      {/* Search Bar */}
      <div style={{ padding: "0 15px", marginTop: "5px" }}>
        <input
          type="text"
          placeholder="Search by location, price, or property type"
          style={{
            width: "90%",
            padding: "8px",
            borderRadius: "18px",
            border: "1px solid #ccc",
            background: "#f2f2f2",
            fontSize: "12px",
          }}
        />
      </div>

      {/* Basic Information */}
      <div style={{ padding: "12px" }}>
        <h4 style={{ marginBottom: "10px", fontSize: "14px" }}>Basic Information</h4>

        <label style={styles.label}>Property Title</label>
        <input style={styles.input} placeholder="e.g., Modern Home" />

        <label style={styles.label}>Address</label>
        <textarea
          style={{ ...styles.input, height: "45px" }}
          placeholder="Enter Full Address"
        ></textarea>

        <label style={styles.label}>Asking Price</label>
        <input style={styles.input} placeholder="e.g., ₹45,00,000" />

        {/* Property Details Section */}
        <h4 style={{ marginTop: "12px", marginBottom: "4px", fontSize: "14px" }}>
          Property Details
        </h4>

        <div style={{ display: "flex", gap: "8px" }}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Bedrooms</label>
            <input style={styles.input} placeholder="3" />
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Kitchen</label>
            <input style={styles.input} placeholder="2" />
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Square Feet</label>
            <input style={styles.input} placeholder="1850" />
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Year Built</label>
            <input style={styles.input} placeholder="2021" />
          </div>
        </div>

        <label style={styles.label}>Property Description</label>
        <textarea
          style={{ ...styles.input, height: "40px" }}
          placeholder="Describe your property..."
        ></textarea>

        {/* Add Button */}
        <button
          style={{
            width: "100%",
            padding: "9px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "22px",
            marginBottom: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "13px",
          }}
          onClick={() => navigate("/property-success")}
        >
          Add My Property
        </button>
      </div>

      {/* Home Indicator */}
      <div style={styles.homeIndicator}></div>
    </div>
  );
}
