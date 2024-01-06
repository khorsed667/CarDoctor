import React from 'react';
import picture from '../assets/images/checkout/checkout.png';

const CommonBanner = ({Keyword}) => {
    return (
        <div className='mb-28 relative'>
            <div>
                <img className='w-full' src={picture} />
            </div>
            <div className='h-full rounded-xl absolute flex items-center top-0 bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0.00)] justify-start'>
                <p className='text-5xl text-white ms-5 font-bold'>{Keyword}</p>
            </div>
        </div>
    );
};

export default CommonBanner;