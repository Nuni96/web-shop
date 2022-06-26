import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <div className="homePage__image">
        <img
          className="homePage__img"
          src="https://sarajevo.travel/assets/photos/places/original/1326-5th-avenue7-1567677565.jpg"
          alt="homePage Background"
        />
      </div>
      <div className="homescreen">
        <h2 className="homescreen__title">Latest Products</h2>
        <div className="kontejner">
          <div className="left-container">
            <div className="right__info">
              <p className="category">
                <Link to="/man-fashion" className="category-link">Man fashion</Link>
              </p>
              <p className="category">
                <Link to="/woman-fashion" className="category-link">Woman fashion</Link>
              </p>
            </div>
          </div>
          <div className="homescreen__products">
            {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              products.map((product) => (
                <Product
                  key={product._id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  productId={product._id}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
