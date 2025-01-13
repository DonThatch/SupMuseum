import {Link} from "react-router-dom"
import logo from "../assets/logo-2web.png"
import "../Styles/Header.css"
import BurgerMenu from "./BurgerMenu.jsx";
import NavBar from "./SearchBar.jsx";
function Header(){
    return(
        <div id={"Header"}>
            <div id={"link"}>
                <Link to={"/"} className={"menu"}>Home</Link>
                <Link to={"/advanced_search"} className={"menu"}>Advanced Search</Link>
            </div>
            <div>
                <img src={logo} alt={"logo"} id={"logo"} width={107} height={65}/>
            </div>
            <NavBar/>
            <BurgerMenu/>
        </div>
    )
}

export default Header