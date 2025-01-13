import { useState } from 'react';
import '../Styles/BurgerMenu.css';
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [animation, setAnimation] = useState("");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setAnimation(isOpen ? "slideOut" : "slideIn");
    };

    return (
        <div className="burger-menu">
            <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className={`phoneMenu ${animation}`}> {/* Ajout de la classe d'animation */}
                <Link to={"/"} className={"menu"}>Home</Link>
                <Link to={"/advanced_search"} className={"menu"}>Advanced Search</Link>
                <SearchBar/>
            </div>
        </div>
    );
}


export default BurgerMenu;
