import { assets } from "../../assets/assets"
import "./footer.css"

function Footer() {
    return (
        <>
            <div className="footer" id="footer">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <img src={assets.logoo} />
                        <p>FreshBite is a fast and reliable food delivery app that brings delicious meals straight to your doorstep.</p>
                        <div className="footer-social-icons">
                            <img src={assets.facebook_icon} />
                            <img src={assets.twitter_icon} />
                            <img src={assets.linkedin_icon} />
                        </div>
                    </div>

                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>

                    </div>

                    <div className="footer-content-right">
                        <h2>Get In Touch</h2>
                        <ul>
                            <li>+1-212-890-5545</li>
                            <li>contact@freshbite.com</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="footer-copyright">
                    copyright 2026 @ FreshBite.com - All Right Reserved.
                </p>
            </div>
        </>
    )
}

export default Footer