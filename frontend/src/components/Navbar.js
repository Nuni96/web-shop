import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <li><img className='navbar__img' alt='navbar__img' src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/61276718_369221937044872_1087812042372415488_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4nFYWCf4B5MAX9any0F&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT_jjvZ8PX5fVGyTY9tkqyAKDcKPX1hRu67T2NLtVho_rg&oe=62D6653D"></img></li>
          <li><h2>5th Avenue Online Shop</h2></li>
        </Link>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/log-in">Log In</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
