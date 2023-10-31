import React from "react";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    position: "absolute",
    bottom: "0",
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <p>&copy; 2023 Made With ❤️ By Anirudha_Pagare</p>
      </div>
    </footer>
  );
}
