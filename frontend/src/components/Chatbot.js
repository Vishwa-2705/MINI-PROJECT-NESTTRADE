import React, { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    const message = input.trim();
    if (!message) return;

    setMessages((prev) => [...prev, { sender: "user", text: message }]);
    setInput("");

    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: Array.isArray(data.response)
            ? data.response.join("\n")
            : data.response,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error: Could not reach server." },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const styles = {
    container: {
      width: "320px",         // reduced width
      height: "650px",        // increased height
      backgroundColor: "#fff",
      borderRadius: "25px",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
      border: "2px solid #000",
      fontFamily: "'Times New Roman', serif",  // changed font
      margin: "0 auto",
    },
    header: {
      backgroundColor: "#000",
      color: "#fff",
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "bold",
      padding: "12px",
      borderBottom: "1px solid #000",
    },
    body: {
      flex: 1,
      padding: "15px",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    message: (sender) => ({
      maxWidth: "75%",
      padding: "10px 15px",
      borderRadius: "15px",
      wordWrap: "break-word",
      fontSize: "14px",
      lineHeight: 1.4,
      alignSelf: sender === "user" ? "flex-end" : "flex-start",
      backgroundColor: sender === "user" ? "#000" : "#f0f0f0",
      color: sender === "user" ? "#fff" : "#000",
      fontFamily: "'Times New Roman', serif",
    }),
    footer: {
      display: "flex",
      padding: "12px",
      borderTop: "1px solid #000",
    },
    input: {
      flex: 1,
      padding: "10px 12px",
      borderRadius: "20px",
      border: "1px solid #ccc",
      outline: "none",
      marginRight: "10px",
      fontFamily: "'Times New Roman', serif",
    },
    button: {
      padding: "10px 15px",
      borderRadius: "20px",
      border: "none",
      backgroundColor: "#000",
      color: "#fff",
      cursor: "pointer",
      fontFamily: "'Times New Roman', serif",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>NestTrade Chat</div>
      <div style={styles.body} ref={chatBodyRef}>
        {messages.map((msg, idx) => (
          <div key={idx} style={styles.message(msg.sender)}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.footer}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}
