import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const DebugLogin = () => {
  const [cookies, setCookie] = useCookies(["userToken", "adminToken"]);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const testLogin = async () => {
    setLoading(true);
    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      console.log("API URL:", API_BASE_URL);

      const res = await axios.post(
        `${API_BASE_URL}login.php`,
        {
          email: "test@gmail.com",
          password: "123456",
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      setResponse(res.data);

      if (res.data.success) {
        setCookie("userToken", res.data.token, { path: "/" });
        alert("Token stored in cookie!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Check console for error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Debug Login Page</h2>

        <button style={styles.button} onClick={testLogin}>
          {loading ? "Testing..." : "Test Login API"}
        </button>

        <div style={styles.section}>
          <h3>Response</h3>
          <pre style={styles.box}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>

        <div style={styles.section}>
          <h3>Cookies</h3>
          <pre style={styles.box}>
            {JSON.stringify(cookies, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f9",
  },
  card: {
    width: "500px",
    padding: "30px",
    borderRadius: "10px",
    background: "#ffffff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  section: {
    marginTop: "15px",
  },
  box: {
    background: "#111",
    color: "#0f0",
    padding: "10px",
    borderRadius: "6px",
    fontSize: "13px",
    maxHeight: "150px",
    overflow: "auto",
  },
};

export default DebugLogin;