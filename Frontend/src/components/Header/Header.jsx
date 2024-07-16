import "./Header.scss";
import { useNavigate } from "react-router-dom";
import Cart from '../Cart/Cart'
import Search from './Search/Search';
import { Context } from "../../Store/Context";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";

import { useEffect, useState, useContext } from "react";

const Header = () => {
    const { cartCount } = useContext(Context);
    const [scrolled, setScrolled] = useState(false);
    const [cart, setCart] = useState(false);
    const [search, setSearch] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const scroll = window.scrollY;
        if (scroll > 90) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])

    return <> <header className={`main-container ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
            <ul className="ul-content">
                <li onClick={() => navigate("./")}>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="logo-content" onClick={() => navigate("./")}>ChargeX</div>
            <div className="icon-content">
                <FaRegHeart />
                <LuSearch onClick={() => setSearch(true)} />
                <span className="cart-icon" onClick={() => setCart(true)}>
                    <BsCart3 />
                    {!!cartCount && <span>{cartCount}</span>}
                </span>
            </div>
        </div>
    </header>
        {cart && <Cart showCart={setCart} />}
        {search && <Search showSearch={setSearch} />}
    </>

};

export default Header;
