import { faFacebookF, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const {GoogleSingUp} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handelGooogleSignUp = () =>{
        GoogleSingUp()
        .then(res => {
            console.log(res.user);
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error);
        })
    }

  return (
    <div className="flex flex-col items-center">
      <p>Or Sign Up with</p>
      <div className="my-3">
        <FontAwesomeIcon className="p-3 cursor-pointer text-xl mx-3 border-2 rounded-full bg-slate-100" icon={faFacebookF} />
        <FontAwesomeIcon className="p-3 cursor-pointer text-xl border-2 rounded-full bg-slate-100" icon={faLinkedinIn} />
        <FontAwesomeIcon onClick={handelGooogleSignUp} className="p-3 cursor-pointer text-xl mx-3 border-2 rounded-full bg-slate-100" icon={faGoogle} />
      </div>
    </div>
  );
};

export default SocialLogin;
