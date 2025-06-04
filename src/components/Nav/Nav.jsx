import { NavLink } from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <nav className="nav">
            <span className="nav-title">My Store</span> {/* Add a title/logo */}
            <ul>
                <li><NavLink to="home">Home</NavLink></li>
                <li><NavLink to="produit">Products</NavLink></li>
            </ul>
        </nav>
    );
}