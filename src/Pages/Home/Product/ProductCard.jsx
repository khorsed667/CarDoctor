import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCXard = ({product}) => {
  return (
    <div className="card w-full rounded-2xl bg-base-100 shadow-xl text-center">
      <div className="bg-inherit rounded-2xl">
        <figure>
          <img className="w-full xl:h-[200px] lg:h-[150px] md:px-24 sm:px-12 xsm:p-6" src={product} alt="Shoes" />
        </figure>
      </div>
      <div className="card-body p-0">
        <div>
          <FontAwesomeIcon className="text-orange-600 xsm:text-sm" icon={faStar} />
          <FontAwesomeIcon className="text-orange-600 xsm:text-sm" icon={faStar} />
          <FontAwesomeIcon className="text-orange-600 xsm:text-sm" icon={faStar} />
          <FontAwesomeIcon className="text-orange-600 xsm:text-sm" icon={faStar} />
          <FontAwesomeIcon className="text-orange-600 xsm:text-sm" icon={faStar} />
        </div>
        <h2 className="lg:text-2xl md:text-lg font-bold cursor-pointer">Car Engine plug</h2>
        <p className="font-bold md:pb-5 xsm:pb-2 text-orange-600">$ 200</p>
      </div>
    </div>
  );
};

export default ProductCXard;
