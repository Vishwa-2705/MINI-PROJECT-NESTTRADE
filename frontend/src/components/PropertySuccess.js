import React from "react";
import { FaArrowLeft, FaCheckCircle, FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PropertySuccess() {
  const navigate = useNavigate();

  const styles = {
    phoneContainer: {
      width: "310px",
      minHeight: "650px",
      margin: "20px auto",
      border: "2px solid #000",
      borderRadius: "25px",
      backgroundColor: "#fff",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
      overflow: "hidden",
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
      backgroundColor: "#ffffffff",
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
      left: "32%",
    },
  };

  return (
    <div style={styles.phoneContainer}>
      {/* Status Bar */}
      <div style={styles.statusBar}>
        <div>11:11 AM</div>
        <div style={{ display: "flex", gap: "6px" }}>
          <FaSignal />
          <FaWifi />
          <FaBatteryFull />
        </div>
        <div style={styles.notch}></div>
      </div>

      {/* Back Arrow */}
      <div style={{ display: "flex", alignItems: "center", padding: "10px 15px" }}>
        <FaArrowLeft
          style={{ marginRight: "8px", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
      </div>

      {/* Success Icon and Message */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <FaCheckCircle size={70} color="black" />
        <h3 style={{ marginTop: "15px", fontWeight: "bold" }}>Property Added Successfully</h3>
        <p style={{ fontSize: "13px", color: "#555", padding: "0 20px" }}>
          Your property has been listed on NestTrade and is live for potential buyers to discover.
        </p>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "30px", textAlign: "center", padding: "0 20px" }}>
        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#ddd",
            border: "none",
            borderRadius: "25px",
            color: "#000",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
          onClick={() => navigate("/")}
        >
          Add another Property
        </button>

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#000",
            border: "none",
            borderRadius: "25px",
            color: "#fff",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/role-selection")}
        >
          Go to Dashboard
        </button>
      </div>

      {/* Bottom Note */}
      <p
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#555",
          marginTop: "30px",
          padding: "0 20px",
        }}
      >
        Your property will be reviewed within 24 hours. <br />
        You’ll receive notifications about inquiries and viewings.
      </p>

      {/* Home Indicator */}
      <div style={styles.homeIndicator}></div>
    </div>
  );
}
