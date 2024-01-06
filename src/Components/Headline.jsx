const Headline = ({ title, content }) => {
    return (
            <div className='text-center my-5 w-2/3 md:w-1/2'>
                <h4 className='font-bold text-orange-600'>{title}</h4>
                <h2 className='font-bold xlg:text-5xl lg:text-4xl md:text-3xl text-2xl my-3'>{content}</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
    );
};

export default Headline;