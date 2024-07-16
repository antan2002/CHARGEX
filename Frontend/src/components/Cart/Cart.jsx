import "./Cart.scss";
import { useNavigate } from "react-router-dom";
import CartItem from '../Cart/CartItem/CartItem';
import { IoCloseSharp } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi2";
import { useContext } from "react";
import { Context } from "../../Store/Context";
import { loadStripe } from '@stripe/stripe-js';

const Cart = ({ showCart }) => {
    const { cartItem, cartSubTotal } = useContext(Context);
    console.log(cartItem)
    const navigate = useNavigate();

    const returnToShop = () => {
        navigate('/');
    };

    // const makePayment = async () => {
    //     const stripe = await loadStripe("pk_test_51PcYpi2LKqrtXGE7ZHWf1GA8TXThG0sYbU3NUhtw0bW0imuwcSDmS5MX9bXYrTtyk7o6KRuEd0zEGLbmB1PvLHeN00sHI8NDqx")

    //     const body = {
    //         products: cartItem
    //     }
    //     const headers = {
    //         "Content-Type": "application/json"  // Fixed the typo here
    //     }
    //     const response = await fetch("http://localhost:7000/api/create-checkout-session", {
    //         method: "POST",
    //         headers: headers,
    //         body: JSON.stringify(body)
    //     });

    //     const session = await response.json();
    //     const result = await stripe.redirectToCheckout({
    //         sessionId: session.id
    //     });

    //     if (result.error) {
    //         console.log(result.error)
    //     }
    // }
    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51PcYpi2LKqrtXGE7ZHWf1GA8TXThG0sYbU3NUhtw0bW0imuwcSDmS5MX9bXYrTtyk7o6KRuEd0zEGLbmB1PvLHeN00sHI8NDqx");

        const body = {
            products: cartItem  // Ensure cartItem is an array of product objects
        };
        const headers = {
            "Content-Type": "application/json"
        };

        try {
            const response = await fetch("http://localhost:7000/api/create-checkout-session", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, ${error}`);
            }

            const session = await response.json();
            console.log("Session ID:", session.id); // Log the session ID for debugging

            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (result.error) {
                console.error(result.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="cart-pannal">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-but">
                        <IoCloseSharp onClick={() => showCart(false)} />
                        <span className="text">Close</span>
                    </span>
                </div>

                {cartItem && cartItem.length > 0 ? (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Total:</span>
                                <span className="text total">&#8377;{cartSubTotal}</span>
                            </div>
                            <div className="check">
                                <button className="checkout" onClick={makePayment}>
                                    CHECK OUT
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="empty-cart">
                        <HiShoppingCart />
                        <span>No Products remain</span>
                        <button className="return" onClick={returnToShop}>RETURN TO SHOP</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
