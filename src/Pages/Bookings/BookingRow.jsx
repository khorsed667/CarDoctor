import React from "react";

const BookingRow = ({ booking, handelDelete, handelUpdateData }) => {
  const { _id, img, service_title, date, price, status } = booking;

  return (
    <tr>
      <th>
        <button onClick={()=>handelDelete(_id)} className="btn btn-sm btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded-xl w-12 h-12">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <h2>{service_title}</h2>
      </td>
      <td>${price}</td>
      <td>{date}</td>
      <th>
        {
            status ? <span className="font-bold text-green-600">Confirmed</span> :
            <button onClick={() => handelUpdateData(_id)} className="btn btn-ghost btn-xs">Pending...</button>}
            {/* <button onClick={() => handelUpdateData(_id)} className="btn btn-ghost btn-xs">{status ? "Confirmed" : "Pending..."}</button> */}
      </th>
    </tr>
  );
};

export default BookingRow;
