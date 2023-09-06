import logo from "../../public/images/logo.svg"

export default function Navbar() {
    return (
        <nav>
            <img className="logo" alt="logo" src={logo}></img>
            <h3 className="logoTitle">my travel journal.</h3>
        </nav>
    );
};