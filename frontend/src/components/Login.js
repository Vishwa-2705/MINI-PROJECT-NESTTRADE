import React, { useState } from "react";
import { FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../components/images/logo.jpg"
import google from "../components/images/google.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    container: {
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
      alignItems: "center",
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
    logo: {
      width: "150px",
      marginTop: "40px",
      marginBottom: "10px",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "25px",
    },
    input: {
      width: "80%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    button: {
      width: "80%",
      padding: "12px",
      backgroundColor: "black",
      color: "white",
      fontSize: "16px",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      marginTop: "10px",
      marginBottom: "20px",
    },
    divider: {
      width: "80%",
      textAlign: "center",
      borderBottom: "1px solid #ccc",
      lineHeight: "0.1em",
      margin: "20px 0",
      fontSize: "14px",
      color: "#777",
    },
    dividerText: {
      background: "#fff",
      padding: "0 10px",
    },
    googleBtn: {
      width: "80%",
      padding: "12px",
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      borderRadius: "25px",
      fontSize: "14px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginBottom: "20px",
    },
    signUp: {
      fontSize: "14px",
      color: "#000",
      marginBottom: "30px",
      cursor: "pointer",
    },
    homeIndicator: {
      width: "100px",
      height: "6px",
      backgroundColor: "black",
      borderRadius: "3px",
      position: "absolute",
      bottom: "10px",
    },
  };

  // ✅ handle login click
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        navigate("/role-selection"); // success navigate
      } else {
        alert(data.message || "Invalid credentials!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error. Try again later!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.statusBar}>
        <div>9:41</div>
        <div></div>
        <div>
          <FaSignal /> <FaWifi /> <FaBatteryFull />
        </div>
        <div style={styles.notch}></div>
      </div>

      <img src={logo} alt="NestTrade Logo" style={styles.logo} />
      <h2 style={styles.title}>NestTrade</h2>

      {/* Form */}
      <input
        type="text"
        placeholder="Email/Phone"
        style={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>

      <div style={styles.divider}>
        <span style={styles.dividerText}>OR</span>
      </div>

      <button style={styles.googleBtn}>
        <img src={google} alt="Google" width="18" height="18" />
        Continue with Google
      </button>

      <p style={styles.signUp}>Sign Up</p>

      <div style={styles.homeIndicator}></div>
    </div>
  );
}

export default Login;
