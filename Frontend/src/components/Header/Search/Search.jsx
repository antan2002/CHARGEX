import React, { useContext, useState } from 'react';
import './Search.scss';
import { RiCloseFill } from 'react-icons/ri';
import { Context } from '../../../Store/Context';
import { useNavigate } from 'react-router-dom';


const Search = ({ showSearch }) => {
    const navigate = useNavigate();
    const { products } = useContext(Context)
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="search-content">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder="Search Charger Model"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <RiCloseFill onClick={() => showSearch(false)} />
            </div>
            <div className="search-result">
                <div className="results">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="search-item" onClick={() => navigate("/product/" + product.id)}>
                            <div className="img">
                                <img src={product.image} alt="Product" />
                            </div>
                            <div className="details">
                                <span className="name">{product.name}</span>
                                <span className="desc">{product.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
