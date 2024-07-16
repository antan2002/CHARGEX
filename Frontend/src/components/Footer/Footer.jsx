import "./Footer.scss";
import { SlLocationPin } from "react-icons/sl";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Payment from '../../assets/payments.png'


const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    ChargeX is a premier electric vehicle charger Ecommerce store, providing Level 2 Electric Vehicle Supply Equipment (EVSE) charging stations and cable management solutions for home and commercial use.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <SlLocationPin />
                    <div className="text">
                        4, Pashupati Bhattacharjee Road, Kolkata - 700034, West Bengal, India
                    </div>
                </div>
                <div className="c-item">
                    <IoMdCall />
                    <div className="text">
                        Tel: +44 161 2496773
                    </div>
                </div>
                <div className="c-item">
                    <MdEmail />
                    <div className="text">
                        Email: customer.services@charge.x
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Ctaegories</div>
                <span className="text">AC Charger</span>
                <span className="text">DC Charger</span>
                <span className="text">TYPE-2 PLUG</span>
                <span className="text">CHARGING STATION</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home </span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Copyright © 2024 ChargeX.All Rights Reserved.
                    Ecommerce website design by Antan Roy.
                </div>
                <img src={Payment} alt="payment" />
            </div>
        </div>
    </footer>;
};

export default Footer;
