
import { Link } from "react-router-dom";
import { LogoFooter, PokeballFooter } from "./icons";
import './Footer.css';

const Footer = () => {

    const year= new Date().getFullYear();

    return (
        <nav>
            <Link to="/">
                <LogoFooter />
            </Link>
            <div className="text-footer"> <p>©{year}</p></div>
            <Link to="/">
                <PokeballFooter />
            </Link>
        </nav>
    )
}

export default Footer;