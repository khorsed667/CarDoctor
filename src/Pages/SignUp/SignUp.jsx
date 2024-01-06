import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginPicture from "../../../src/assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

  const handelSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
    })
    .catch(error => console.log(error))

  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={LoginPicture}></img>
        </div>
        <div className="card shrink-0 max-w-sm w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handelSignUp} className="card-body">
            <h1 className="text-5xl font-bold">SignUp</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="SignUp"
                className="bg-orange-600 rounded-xl text-white py-2"
              />
            </div>
          </form>
          <p className="text-center">
            Already Have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
