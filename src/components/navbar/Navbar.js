import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

import './style.css';

const Navbar = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const noActiveLink = "nav-list__link";

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo"><strong>Web-dev</strong> Portfolio</NavLink>

                    <BtnDarkMode/>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink 
                            to="/" 
                            className={({isActive}) => isActive ? activeLink : noActiveLink}
                            >Home</NavLink></li>
                        <li className="nav-list__item">
                            <NavLink 
                            to="/project" 
                            className={({isActive}) => isActive ? activeLink : noActiveLink}
                            >Projects</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink 
                            to="/contacts" 
                            className={({isActive}) => isActive ? activeLink : noActiveLink}
                            >Contacts</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;