import { NavLink } from 'react-router-dom'
import './nav.css'

export default function Nav() {
    


    return(
        <div className="nav">
            <ul>
                <NavLink to="home">Home</NavLink>
                <NavLink to="produit">Produits</NavLink>
            </ul>
        </div>
    )
}