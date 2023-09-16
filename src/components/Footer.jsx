import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div>
        <button className="back-btn" onClick={() => navigate(-1)}>« Volver
        </button>
      </div>
      <div className="footer">
        <div className="dh-logo">
          <p>Powered by</p>
          <p> Federico Tartari </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;