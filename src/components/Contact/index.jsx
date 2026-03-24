import './index.css'
// import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const Contact=()=>{
    return(
        <footer className="footer" id="contact">
            <div className="footer-container">

                <div className="footer-top">

                    {/* Brand */}
                    <div className="footer-brand">
                        <h3>Spice<span>Kitchen</span></h3>
                        <p>Bringing authentic Indian flavours to your table since 2004. Every dish is a celebration of tradition.</p>

                        <div className="social-icons">
                            <FaFacebook size={16} />
                            <FaInstagram size={16} />
                            <FaTwitter size={16} />
                        </div>
                    </div>

                    {/* Links */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>About</li>
                            <li>Experience</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Timings */}
                    <div className="footer-timings">
                        <h4>Opening Hours</h4>
                        <ul>
                            <li>Mon – Fri: 11am – 10pm</li>
                            <li>Saturday: 10am – 11pm</li>
                            <li>Sunday: 10am – 9pm</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><FaMapMarkerAlt /> 42 Spice Lane, London, UK</li>
                            <li><FaPhoneAlt /> +44 20 1234 5678</li>
                            <li><FaEnvelope /> hello@spicekitchen.com</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p>© 2026 SpiceKitchen. All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}
export default Contact