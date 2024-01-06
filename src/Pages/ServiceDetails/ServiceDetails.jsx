import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import detailsPhoto from "../../assets/images/checkout/details.jpg";
import Facility from "./Facility";
import logo from "../../assets/logo.svg";
import Button from "../../Components/Button";
import CommonBanner from "../../Components/CommonBanner";

const ServiceDetails = () => {
  const targetedService = useLoaderData();
  const { title, price, facility, description, _id, img } = targetedService;
  const [facilities] = facility;
  console.log(facilities.name);

  return (
    <div className="flex flex-col">
      <CommonBanner Keyword={'Service Details'}></CommonBanner>
      <div className="flex">
        <div className="left_div w-2/3">
          <div className="details-banner">
            <img className="me-4 rounded-lg" src={detailsPhoto} alt="" />
          </div>
          <div className="details-description">
            <h1 className="my-4 font-bold text-3xl">{title}</h1>
            <p className="my-4 text-justify">{description}</p>
          </div>
          <div className="facilities grid grid-cols-2 gap-7">
            {facility.map((facili, index) => (
              <Facility key={index} facili={facili}></Facility>
            ))}
          </div>
          <div className="precceed-text text-justify">
            <p className="my-3 font-bold text-3xl">3 Easy Steps to Procceed</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              nemo similique explicabo sapiente deleniti facere voluptatem
              dolorum architecto ut? Vel porro enim necessitatibus accusantium
              inventore libero veniam neque reiciendis repudiandae, velit,
              maxime autem laboriosam, ab placeat nam nisi iste quidem?
            </p>
          </div>
          <div className="procceed-steps grid grid-cols-3 gap-14 my-3">
            <div className="p-7 text-center border-2 border-slate-300 rounded-2xl mx-2">
              <div className="bg-orange-600 boredr-4 border-orange-200 text-white font-bold text-3xl rounded-full w-[50px] h-[50px] flex justify-center items-center mx-auto">
                <p>01</p>
              </div>
              <p className="font-bold my-5">STEP ONE</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="p-7 text-center border-2 border-slate-300 rounded-2xl mx-2">
              <div className="bg-orange-600 boredr-4 border-orange-200 text-white font-bold text-3xl rounded-full w-[50px] h-[50px] flex justify-center items-center mx-auto">
                <p>02</p>
              </div>
              <p className="font-bold my-5">STEP TWO</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="p-7 text-center border-2 border-slate-300 rounded-2xl mx-2">
              <div className="bg-orange-600 boredr-4 border-orange-200 text-white font-bold text-3xl rounded-full w-[50px] h-[50px] flex justify-center items-center mx-auto">
                <p>03</p>
              </div>
              <p className="font-bold my-5">STEP THREE</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="my-6">
            <iframe
              className="w-full"
              height={"350px"}
              src="https://www.youtube.com/embed/PUkAIAIzA0I?si=-qa8mrlE3_NemD-q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="right-div w-1/3 text-center">
          <div className="mx-5 p-10 flex flex-col justify-center items-center bg-slate-100 rounded-2xl">
            <img src={logo} alt="" />
            <p className="my-5 font-bold text-xl px-5">
              Need Help? We Are Here To Help You
            </p>
            <div className="bg-white w-2/3 rounded-xl p-3 relative text-center">
              <p className="text-xl font-bold">
                <span className="text-orange-600">Car Doctor</span> Special
              </p>
              <p className="my-3">Save up to 60% off</p>
              <Button
                className="absolute top-20 left-12"
                buttonName={"Get A Quote"}
              ></Button>
            </div>
          </div>
          <div>
            <p className="text-2xl ms-5 text-start font-bold my-5">
              Price : ${price}
            </p>
            <Link to={`/service_details/checkout/${_id}`}>
              <Button buttonName={"Procceed Checkout"}></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
