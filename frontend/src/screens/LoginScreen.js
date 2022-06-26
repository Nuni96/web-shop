import { Link } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <>
      <form className="form-signin">
        <img
          className="mb-4"
          src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/61276718_369221937044872_1087812042372415488_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4nFYWCf4B5MAX9any0F&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT_jjvZ8PX5fVGyTY9tkqyAKDcKPX1hRu67T2NLtVho_rg&oe=62D6653D"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block " type="submit">
          Sign in
        </button>
        <hr />
        <Link className="link" to="/register">
          {" "}
          <button className="btn btn-lg btn-primary btn-block ">
            Register{" "}
          </button>
        </Link>
        <p className="mt-5 mb-3 text-muted">&copy; 2022-2024</p>
      </form>
    </>
  );
};

export default LoginScreen;
