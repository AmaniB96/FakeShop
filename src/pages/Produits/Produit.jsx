import axios from 'axios';
import './produit.css'
import {useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Produit() {
    
    const [product, setProduct] = useState("")

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/`)
        .then((response) => setProduct(response.data))
        .catch((error) => console.log(error));
        
    }, [])

    return(
            <>
            <div className='produit-container'>
                <h1>PRODUIT</h1>

                <div className='quatreEtoiles'>
                    <h2>Highly Rated Products</h2>
                    <div className="product-grid">
                    {product && product.map((item) => (
                        <NavLink to={`${item.id}`}><div key={item.id} className="product-card">
                            <div className="product-image-container">
                                <img src={item.image} alt="" />
                            </div>

                            <div className="product-info">
                                <h3 className="product-title">{item.title}</h3>
                                <p className="product-price">{item.price} $</p>
                                
                            </div>
                            
                        </div>
                        </NavLink> 
                    )) }
                    </div>
                </div>
            </div>
         </>
    )
}