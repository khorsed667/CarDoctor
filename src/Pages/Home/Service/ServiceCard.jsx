import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-full bg-base-100 lg:p-5 xsm:p-2 shadow-xl">
      <figure>
        <img
          className="md:w-full lg:p-3 md:rounded-3xl xsm:rounded-md md:h-[250px] xsm:h-[140px] "
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body xsm:p-1 md:p-3 relative">
        <div className="w-3/4">
          <h2 className="text-xl xsm:text-lg font-bold">{title}</h2>
          <p className="text-orange-600 text-sm md:text-lg font-bold md:py-2"><span className="">Price:</span> ${price}</p>
        </div>
        <Link to={`/service_details/${_id}`}>
          <button className="absolute md:right-[15%] md:bottom-[20%] xsm:right-[8%] xsm:bottom-[10%]">
            <FontAwesomeIcon className="text-orange-600" icon={faArrowRight} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
