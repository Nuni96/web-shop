import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="navbar__logo">
        <h2>5TH AVENUE</h2>
        {/*             <img className='logo' src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/61276718_369221937044872_1087812042372415488_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lRwGT0UCxvcAX8dkZhN&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT8AjgYgQ9YhzqV5uC-ItGseo2HBevOkhwsGoXUWVy6iOg&oe=624FEC3D" alt="logo-fifthavenue" />
         */}{" "}
      </div>

      {/* LINKS */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
