import React from 'react';
import "./styles.css";

function Footer(){
const year = new Date().getFullYear();
    return <div>
        <footer>
            <p className="foot">Copyrights © {year}</p>
        </footer>
    </div>
}
export default Footer;