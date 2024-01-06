import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import Headline from "../../../Components/Headline";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center my-5">
      <Headline title={"Services"} content={"Our service Area"}></Headline>
      <div className="grid md:grid-cols-3 xsm:grid-cols-2 xsm:gap-5 md:gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <button className="border-2 border-orange-600 rounded-md my-3">
        <p className="text-orange-600 p-2">More Services</p>
      </button>
    </div>
  );
};

export default Service;
