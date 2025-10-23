import React from "react";
import { FaArrowLeft, FaSignal, FaWifi, FaBatteryFull, FaPhone } from "react-icons/fa";
import house1 from "../components/images/house1.jpg";

export default function CheckoutPage() {
  const styles = {
    phoneContainer: {
      width: "310px",
      minHeight: "600px",
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
      height: "25px", // ⬅️ reduced height
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 10px",
      fontSize: "11px", // ⬅️ reduced font
      fontWeight: "bold",
      color: "#000",
      backgroundColor: "#fff",
      position: "relative",
    },
    notch: {
      width: "90px",
      height: "5px", // ⬅️ smaller notch
      backgroundColor: "black",
      borderRadius: "8px",
      position: "absolute",
      top: "8px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    header: {
      display: "flex",
      alignItems: "center",
      padding: "6px 12px", // ⬅️ reduced padding
      borderBottom: "1px solid #eee",
    },
    backIcon: { fontSize: "16px", cursor: "pointer", marginRight: "8px" },
    content: { padding: "12px", marginBottom: "50px" }, // ⬅️ less bottom margin
    imageBox: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      marginBottom: "12px",
    },
    image: {
      width: "90px",
      height: "70px",
      borderRadius: "10px",
      objectFit: "cover",
    },
    billBox: {
      border: "1px solid #000",
      padding: "8px",
      marginBottom: "12px",
      borderRadius: "18px",
      backgroundColor: "#dfdbdbff",
    },
    billRow: { display: "flex", justifyContent: "space-between", margin: "4px 0" },
    payBtn: {
      width: "100%",
      padding: "10px", // ⬅️ reduced button height
      borderRadius: "20px",
      backgroundColor: "black",
      color: "white",
      fontWeight: "bold",
      fontSize: "13px", // ⬅️ smaller font
      border: "none",
      cursor: "pointer",
      marginTop: "6px",
      marginBottom: "6px", // ⬅️ reduced bottom
    },
    homeIndicator: {
      width: "80px", // ⬅️ slightly smaller
      height: "5px",
      backgroundColor: "black",
      borderRadius: "3px",
      position: "absolute",
      bottom: "6px", // ⬅️ closer to bottom
      left: "50%",
      transform: "translateX(-50%)",
    },
  };

  return (
    <div style={styles.phoneContainer}>
      {/* Status Bar */}
      <div style={styles.statusBar}>
        <div style={{ flex: 1, textAlign: "left" }}>11:11 AM</div>
        <div style={{ flex: 1, textAlign: "center" }}></div>
        <div style={{ display: "flex", gap: "6px" }}>
          <FaSignal />
          <FaWifi />
          <FaBatteryFull />
        </div>
        <div style={styles.notch}></div>
      </div>

      {/* Header */}
      <div style={styles.header}>
        <FaArrowLeft style={styles.backIcon} onClick={() => window.history.back()} />
        <h3 style={{ fontSize: "15px", margin: 0 }}>Checkout</h3>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {/* House Box */}
        <div style={styles.imageBox}>
          <img src={house1} alt="House" style={styles.image} />
          <div>
            <h4 style={{ margin: 0 }}>Modern Family House</h4>
            <p style={{ margin: "2px 0" }}>$450,000</p>
          </div>
        </div>

        {/* Bill Details */}
        <div style={styles.billBox}>
          <div style={styles.billRow}>
            <span>Item Total</span>
            <span>$450,000</span>
          </div>
          <div style={styles.billRow}>
            <span>Discount</span>
            <span>$50,000</span>
          </div>
          <div style={styles.billRow}>
            <span>Handling Charge</span>
            <span>$10,000</span>
          </div>
          <div style={{ ...styles.billRow, fontWeight: "bold" }}>
            <span>Grand Total</span>
            <span>$410,000</span>
          </div>
        </div>

        {/* Address */}
        <h4 style={{ marginBottom: "5px" }}>Address Details</h4>
        <p style={{ marginTop: 0 }}>1234 Elm St, Springfield</p>

        <h4 style={{ marginBottom: "5px" }}>Contact Agent Details</h4>
        <p style={{ marginTop: 0 }}>16, maroon st, chennai</p>
        <p style={{ margin: "2px 0" }}>
          <FaPhone /> 9786543201
        </p>

        <h4 style={{ marginBottom: "5px" }}>Cancelling policy</h4>
        <p style={{ marginTop: 0 }}>
          Full refund if order has cancelled before the confirmation
        </p>

        <button style={styles.payBtn}>Pay $410,000</button>
      </div>

      {/* Home Indicator */}
      <div style={styles.homeIndicator}></div>
    </div>
  );
}
