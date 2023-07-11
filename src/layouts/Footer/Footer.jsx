import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/images/logo/Logo.png";

function Footer() {
    return(
        <footer>
            <div id="footer-container">
                <img src={logoFooter} alt="Logo" />
                <p>&copy; zimer tov beahava</p>
            </div>
        </footer>
    );
}

export default Footer;