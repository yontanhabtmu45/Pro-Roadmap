import React from "react";

function Footer() {
    return (
        <footer className="site-footer" role="contentinfo">
            <div className="footer-inner">
                <div>&copy; 2025 ProRoadmaps. All rights reserved.</div>
                <nav aria-label="Footer navigation">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/About">About Us</a></li>
                        <li><a href="/Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;