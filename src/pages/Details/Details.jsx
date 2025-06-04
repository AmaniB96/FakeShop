import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './details.css';
import axios from "axios";

export default function Details() {
    const [products, setProducts] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <>
            {products ? ( 
                <div className="details-container">
                    <h1>{products.title}</h1>
                    <div className="product-details-grid">
                        <div className="product-image-section">
                            <img src={products.image} alt={products.title} />
                        </div>
                        <div className="product-info-section">
                            <p className="product-category">Category: {products.category}</p>
                            <p className="product-description-details">{products.description}</p>
                            <p className="product-price-details">Price: ${products.price}</p>
                            {products.rating && (
                                <p className="product-rating-details">
                                    Rating: {products.rating.rate} ({products.rating.count} reviews)
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading product details...</div>
            )}
        </>
    );
}