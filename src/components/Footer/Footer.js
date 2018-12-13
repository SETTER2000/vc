import React from 'react';
import './Footer.css';
const Footer = ()=>
    <footer className="footer">
        <div className="container">
            <p className="text-muted">VC App &copy; 2018-{new Date().getFullYear()}</p>
        </div>
    </footer>;

export default Footer;



