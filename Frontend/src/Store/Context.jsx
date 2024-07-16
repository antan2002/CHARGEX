import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { products } from '../EVCHARGER/EvDetails'


export const Context = createContext({
    products: [],
    cartItem: [],
    setCartItems: () => { },
    cartCount: 0,
    setCartCount: () => { },
    cartSubTotal: 0,
    setCartSubTotal: () => { },
    handleAddToCart: () => { },
    handleRemoveCart: () => { },
    handleCartProductQuantity: () => { },
});

const StoreContext = ({ children }) => {
    const [cartItem, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    useEffect(() => {
        let count = 0;
        cartItem.map(item => {
            return (count += item.quantity);
        });
        setCartCount(count);
    }, [cartItem]);

    useEffect(() => {
        let subTotal = 0;
        cartItem.map((item) => {
            return (subTotal += item.price * item.quantity)
        });
        setCartSubTotal(subTotal)
    }, [cartItem])

    const handleAddToCart = (product, quantity) => {
        setCartItems(prevItems => {
            const existingProductIndex = prevItems.findIndex(item => item.id === product.id);
            if (existingProductIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingProductIndex].quantity += quantity;
                return updatedItems;
            } else {
                return [...prevItems, { ...product, quantity }];
            }
        });
    };

    const handleRemoveCart = (id) => {
        setCartItems(cartItem.filter(item => item.id !== id));
    };

    const handleCartProductQuantity = (type, product) => {
        setCartItems(prevItems => {
            const existingProductIndex = prevItems.findIndex(item => item.id === product.id);
            if (existingProductIndex !== -1) {
                const updatedItems = [...prevItems];
                if (type === 'increase') {
                    updatedItems[existingProductIndex].quantity += 1;
                } else if (type === 'decrease' && updatedItems[existingProductIndex].quantity > 1) {
                    updatedItems[existingProductIndex].quantity -= 1;
                }
                return updatedItems;
            }
            return prevItems;
        });
    };
    return (
        <Context.Provider value={{
            products,
            cartItem,
            setCartItems,
            cartCount,
            setCartCount,
            cartSubTotal,
            setCartSubTotal,
            handleAddToCart,
            handleRemoveCart,
            handleCartProductQuantity
        }}>
            {children}
        </Context.Provider>
    )
}

export default StoreContext;
