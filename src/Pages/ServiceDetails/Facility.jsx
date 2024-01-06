import React from 'react';

const Facility = ({facili}) => {
    const {name, details} = facili;
    return (
        <div className='border-t-2 text-justify p-5 bg-slate-100 border-orange-600 rounded-md'>
            <p className='text-xl font-bold my-2'>{name}</p>
            <h2>{details}</h2>
        </div>
    );
};

export default Facility;