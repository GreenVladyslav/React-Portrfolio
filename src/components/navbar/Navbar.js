import { NavLink } from 'react-router-dom';

import moon from '../../resources/img/icons/moon.svg';
import sun from '../../resources/img/icons/sun.svg'

import './style.css';

const Navbar = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const noActiveLink = "nav-list__link";

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo"><strong>Web-dev</strong> Portfolio</NavLink>

                    <button className="dark-mode-btn">
                        <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
                    </button>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink 
                            to="/" 
                            className={({isActive}) => isActive ? activeLink : noActiveLink}
                            >Home</NavLink></li>
                        <li className="nav-list__item">
                            <NavLink 
                            to="/projects" 
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