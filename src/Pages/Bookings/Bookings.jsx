import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import CommonBanner from "../../Components/CommonBanner";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookingsData, setBookingsData] = useState([]);
  const nevigate = useNavigate();
  const totalNumberOfBookings = bookingsData.length;

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers:{
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
          setBookingsData(data)
        }
        else{
          nevigate('/')
        }
      });
    console.log(bookingsData);
  }, [url]);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your order has been deleted.",
                icon: "success",
              });
            }
          });
        const remaining = bookingsData.filter((booking) => booking._id !== id);
        setBookingsData(remaining);
      }
    });
  };

  const handelUpdateData = (id) => {
    const confirmation = confirm("Are you sure you want to confirm the order?");
    if (confirmation) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirmed" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
                title: "Confirmed!",
                text: "Service request confirmed.",
                icon: "success",
              });
          }
          const remaining = bookingsData.filter(
            (booking) => booking._id !== id
          );
          const updated = bookingsData.find((booking) => booking._id === id);
          updated.status = "Confirm";
          const totalBookings = [updated, ...remaining];
          setBookingsData(totalBookings);
        });
    }
  };

  return (
    <div>
      <CommonBanner Keyword={"Your Bookings"}></CommonBanner>
      {/* {
        {totalNumberOfBookings : 0} ? <div className="mx-auto mb-24">
        <p className="text-3xl text-center">No Service to Show yet.</p>
        <p className="text-center">(Booked services to display data)</p>
        </div> : */}

        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {bookingsData.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handelDelete={handelDelete}
                handelUpdateData={handelUpdateData}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
      {/* } */}
      
    </div>
  );
};

export default Bookings;
