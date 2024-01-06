import { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import CommonBanner from "../../Components/CommonBanner";

const CheckOut = () => {
  const selectedService = useLoaderData();
  const { title, price, _id, img } = selectedService;
  const { user } = useContext(AuthContext);

  const handelCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;
    const order = {
      customarName: name,
      img,
      email,
      phone,
      date,
      message,
      service_title: title,
      service_id: _id,
      price,
    };
    console.log(order);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <CommonBanner Keyword={"Service Booking"}></CommonBanner>
      <div className="bg-slate-100 my-4 rounded-xl p-10">
        <form onSubmit={handelCheckOut} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <input
                type="name"
                placeholder="Your name"
                name="name"
                defaultValue={user?.displayName}
                className="m-4 input"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="phone"
                placeholder="Your phone"
                name="phone"
                className="m-4 input"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Your email"
                name="email"
                defaultValue={user?.email}
                className="m-4 input"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                placeholder="Booking Date"
                name="date"
                className="m-4 input"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Your message"
              name="message"
              className="m-4 input"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="bg-orange-600 rounded-md my-3"
              type="submit"
              value="Check Out"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
