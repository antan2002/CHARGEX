import "./Product.scss";
import { useNavigate } from 'react-router-dom'

const Product = ({ img, price, name, id }) => {
    const navigate = useNavigate();

    return <div className="main-product" onClick={() => navigate("/product/" + id)}>
        <div className="product-card">
            <img src={img} alt={name} />
        </div>
        <div className="product-spec">
            <span className="name">{name}</span>
            <span className="price">&#8377;{price}</span>
        </div>
    </div>
};

export default Product;
