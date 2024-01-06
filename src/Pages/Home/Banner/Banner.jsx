import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative  w-full">
        <img src={img1} className="w-full  rounded-2xl" />
        <div className="absolute flex flex-col bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0.00)] justify-center rounded-2xl h-full">
          <div className="text-white md:w-2/5 w-1/2 md:ms-5 xsm:ms-1">
            <h1 className="md:text-5xl sm:text-3xl xsm:text-2xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <br />
            <h4 className="md:text-xl sm:inline xsm:hidden">
              There are many variations of passages of available, <span className="">but the
              majority have suffered alteration in some form</span>
            </h4>
            <div className="sm:my-5 xsm:my-2">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn mx-5 my-0 md:display hidden btn-outline btn-primary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle mx-7">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full  rounded-2xl" />
        <div className="absolute flex flex-col bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0.00)] justify-center rounded-2xl h-full">
          <div className="text-white md:w-2/5 w-1/2 md:ms-5 xsm:ms-1">
            <h1 className="md:text-5xl sm:text-3xl xsm:text-2xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <br />
            <h4 className="md:text-xl sm:inline xsm:hidden">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h4>
            <div className="sm:my-5 xsm:my-2">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn mx-5 my-0 md:display hidden btn-outline btn-primary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mx-7">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full  rounded-2xl" />
        <div className="absolute flex flex-col bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0.00)] justify-center rounded-2xl h-full">
          <div className="text-white md:w-2/5 w-1/2 md:ms-5 xsm:ms-1">
            <h1 className="md:text-5xl sm:text-3xl xsm:text-2xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <br />
            <h4 className="md:text-xl sm:inline xsm:hidden">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h4>
            <div className="sm:my-5 xsm:my-2">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn mx-5 my-0 md:display hidden btn-outline btn-primary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mx-7">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full  rounded-2xl" />
        <div className="absolute flex flex-col bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0.00)] justify-center rounded-2xl h-full">
          <div className="text-white md:w-2/5 w-1/2 md:ms-5 xsm:ms-1">
            <h1 className="md:text-5xl sm:text-3xl xsm:text-2xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <br />
            <h4 className="md:text-xl sm:inline xsm:hidden">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h4>
            <div className="sm:my-5 xsm:my-2">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn mx-5 my-0 md:display hidden btn-outline btn-primary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mx-7">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full  rounded-2xl" />
        <div className="absolute flex flex-col bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0.00)] justify-center rounded-2xl h-full">
          <div className="text-white md:w-2/5 w-1/2 md:ms-5 xsm:ms-1">
            <h1 className="md:text-5xl sm:text-3xl xsm:text-2xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <br />
            <h4 className="md:text-xl sm:inline xsm:hidden">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h4>
            <div className="sm:my-5 xsm:my-2">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn mx-5 my-0 md:display hidden btn-outline btn-primary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mx-7">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full  rounded-2xl" />
        <div className="absolute flex flex-col bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0.00)] justify-center rounded-2xl h-full">
          <div className="text-white md:w-2/5 w-1/2 md:ms-5 xsm:ms-1">
            <h1 className="md:text-5xl sm:text-3xl xsm:text-2xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <br />
            <h4 className="md:text-xl sm:inline xsm:hidden">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h4>
            <div className="sm:my-5 xsm:my-2">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn mx-5 my-0 md:display hidden btn-outline btn-primary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle mx-7">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
