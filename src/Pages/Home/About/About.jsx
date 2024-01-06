import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import Button from "../../../Components/Button";

const About = () => {
  return (
    <div className="hero my-10">
      <div className="hero-content xsm:flex-col-reverse md:flex-row">
        <div className="md:w-1/2 relative md:py-5">
          <img src={person} className="w-2/3 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg absolute border-white border-8 right-0 top-1/2 shadow-2xl"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="font-bold text-orange-500">About Us</h3>
          <h1 className="xlg:text-5xl lg:text-4xl md:text-3xl text-2xl lg:py-6 font-bold">
            We are qualified & of experience in this field.
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <p className="py-6  md:hidden lg:block">
            There are many variations of passages of Lorem Ipsum available, by
            injected humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <Button buttonName={"Get More Info"}></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
