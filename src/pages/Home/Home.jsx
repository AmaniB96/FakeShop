import { useState } from 'react'
import './home.css'
import { useEffect } from 'react'
import axios from 'axios'

export default function Home() {

    const [data, setData] = useState("")

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/`)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
        
    }, [])

    return(
        <div className="home">
            <h1>Clothes Shop</h1>

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                
                <div className="carousel-inner"> 
                    {data && data.slice(0,3).map((item,index) => (
                        <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={item.image} className="d-block w-100"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{item.title}</h5>
                                <p className="carousel-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>


                <div className='quatreEtoiles'>
                    <h2>Highly Rated Products</h2>
                    <div className="product-grid">
                    {data && data.filter(item => item.rating.rate >=4).map((item) => (
                        <div key={item.id} className="product-card"> 
                            <div className="product-image-container">
                                <img src={item.image} alt="" />
                            </div>

                            <div className="product-info">
                                <h3 className="product-title">{item.title}</h3>
                                <p className="product-price">{item.price} $</p>
                            </div>

                        </div>
                    )) }
                    </div>
                </div>
            </div>
    )
}