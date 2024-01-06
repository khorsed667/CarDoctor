import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headline from "../../../Components/Headline";

const Testimonial = () => {
  return (
    <div className="my-4 flex flex-col justify-center items-center">
      <Headline title={"Testimonial"} content={"What Customers Says..."}></Headline>
      <div className="flex">
        <div className="md:p-5 xsm:p-2 xsm:mx-2 md:m-5 border-2 border-inherit">
          <div className="md:flex justify-start items-center">
            <div>
              <FontAwesomeIcon className="text-4xl pe-4" icon={faUser} />
            </div>
            <div>
              <h2 className="text-2xl">Awlad Hossain</h2>
              <h2 className="font-bold">Businessman</h2>
            </div>
          </div>
          <p className="my-3 text-justify">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <div><FontAwesomeIcon className="text-orange-600" icon={faStar} /><FontAwesomeIcon className="text-orange-600" icon={faStar} /><FontAwesomeIcon className="text-orange-600" icon={faStar} /><FontAwesomeIcon className="text-orange-600" icon={faStar} /><FontAwesomeIcon className="text-orange-600" icon={faStar} /></div>
        </div>
        <div className="md:p-5 xsm:p-2 xsm:mx-2 md:m-5 border-2 border-inherit">
          <div className="md:flex justify-start items-center">
            <div>
              <FontAwesomeIcon className="text-4xl pe-4" icon={faUser} />
            </div>
            <div>
              <h2 className="text-2xl">Awlad Hossain</h2>
              <h2 className="font-bold">Businessman</h2>
            </div>
          </div>
          <p className="my-3 text-justify">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <div><FontAwesomeIcon className="text-orange-600" icon={faStar} /><FontAwesomeIcon className="text-orange-600" icon={faStar} /><FontAwesomeIcon className="text-orange-600" icon={faStar} /><FontAwesomeIcon className="text-orange-600" icon={faStar} /><FontAwesomeIcon className="text-orange-600" icon={faStar} /></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
