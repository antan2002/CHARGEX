import "./CartItem.scss";
import { Context } from "../../../Store/Context";
import { RiCloseFill } from "react-icons/ri";
import { useContext } from "react";


const CartItem = () => {
    const { cartItem, handleRemoveCart, handleCartProductQuantity } = useContext(Context);
    return (
        <div className="card-products">
            {cartItem.map((item) => (
                <div key={item.id} className="cart-product">
                    <div className="img">
                        <img src={item.image} alt="cart-image" />
                    </div>
                    <div className="details">
                        <span className="pro-name">{item.name}</span>
                        <RiCloseFill onClick={() => handleRemoveCart(item.id)} />
                        <div className="q-button">
                            <span onClick={() => handleCartProductQuantity("decrease", item)}>-</span>
                            <span>{item.quantity}</span>
                            <span onClick={() => handleCartProductQuantity("increase", item)}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.quantity}</span>
                            <span>x</span>
                            <span className="highlight">&#8377;{item.price * item.quantity}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default CartItem;
