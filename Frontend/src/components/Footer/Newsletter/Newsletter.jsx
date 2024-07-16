import "./Newsletter.scss";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { GrAmazon } from "react-icons/gr";

const Newsletter = () => {
    return <div className="main-newsletter">
        <div className="newsletter-content">
            <span className="first-text">Welcome to ChargeX</span>
            <span className="second-text">Subscribe to our newsletter.</span>
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button>Sign Up</button>
            </div>
            <div className="social-icons">
                <div className="icon"> <FaTwitter size={14} /></div>
                <div className="icon"><TfiFacebook size={14} /></div>
                <div className="icon"><FaInstagram size={14} /></div>
                <div className="icon"> < GrAmazon size={14} /></div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
