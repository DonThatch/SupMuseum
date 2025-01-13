import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";

import "../Styles/Footer.css"

function Footer(){
return(
        <div id={"Footer"}>
            <div id={"address"}>
                <h4 className={"infos"}>Address</h4>
                <p className={"infos"}>1000 Fifth Avenue</p>
                <p className={"infos"}>New York, NY 10028</p>
            </div>
            <div id={"link"}>
                <Link to={"/about"} className={"menu"}>About Us</Link>
                <Link to={"/contact"} className={"menu"}>Contact</Link>
                <Link to={"/"} className={"menu"}>Privacy Policy</Link>
            </div>
            <div id={"socialNetwork"}>
                <Link to={"https://www.instagram.com/metmuseum/"} className={"medias"}><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link to={"https://www.pinterest.fr/metmuseum/"} className={"medias"}><FontAwesomeIcon icon={faPinterest} /></Link>
                <Link to={"https://twitter.com/metmuseum"} className={"medias"}><FontAwesomeIcon icon={faTwitter} /></Link>
            </div>
        </div>
    )
}

export default Footer