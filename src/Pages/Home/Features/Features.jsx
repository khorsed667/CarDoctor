import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faClock, faHeadset, faTimeline, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faSquareSteam } from '@fortawesome/free-brands-svg-icons';
import Headline from '../../../Components/Headline';

const Features = () => {
    return (
        <div className='my-6  flex flex-col justify-center items-center'>
            <Headline title={"Features"} content={"Why Choose Us"}></Headline>
            <div className='grid lg:grid-cols-6 xsm:grid-cols-3 gap-3 my-5'>
                <div className='text-center py-3 px-2 border-2 border-inherit rounded-xl'>
                <FontAwesomeIcon className='text-2xl my-2' icon={faUserPlus} />
                    <p className='md:text-2xl xsm:text-lg font-bold'>Expert Team</p>
                </div>
                <div className='text-center py-3 px-2 border-2 border-inherit rounded-xl'>
                <FontAwesomeIcon className='text-2xl my-2' icon={faClock} />
                    <p className='md:text-2xl xsm:text-lg font-bold'>Timely Delivery</p>
                </div>
                <div className='text-center py-3 px-2 border-2 border-inherit rounded-xl'>
                <FontAwesomeIcon className='text-2xl my-2' icon={faHeadset} />
                    <p className='md:text-2xl xsm:text-lg font-bold'>24/7 Support</p>
                </div>
                <div className='text-center py-3 px-2 border-2 border-inherit rounded-xl'>
                <FontAwesomeIcon className='text-2xl my-2' icon={faSquareSteam} />
                    <p className='md:text-2xl xsm:text-lg font-bold'>Best Equipment</p>
                </div>
                <div className='text-center py-3 px-2 border-2 border-inherit rounded-xl'>
                <FontAwesomeIcon className='text-2xl my-2' icon={faCertificate} />
                    <p className='md:text-2xl xsm:text-lg font-bold'>100% Guranty</p>
                </div>
                <div className='text-center py-3 px-2 border-2 border-inherit rounded-xl'>
                <FontAwesomeIcon className='text-2xl my-2' icon={faTimeline} />
                    <p className='md:text-2xl xsm:text-lg font-bold'>Timely delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Features;