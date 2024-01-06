import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";

const PersonCard = ({person}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="md:px-10 xsm:px-2 pt-10">
        <img src={person} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center p-0">
        <h2 className="font-bold lg:text-2xl md:text-xl xsm:text-lg">Car Engine Plug</h2>
        <p>Engine Expert</p>
        <div className="card-actions py-3 pb-3">
          <FontAwesomeIcon
            className="lg:text-2xl md:text-lg xsm:text-sm cursor-pointer"
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className="lg:text-2xl md:text-lg xsm:text-sm cursor-pointer"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="lg:text-2xl md:text-lg xsm:text-sm cursor-pointer"
            icon={faLinkedin}
          />
          <FontAwesomeIcon
            className="lg:text-2xl md:text-lg xsm:text-sm cursor-pointer"
            icon={faInstagram}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
