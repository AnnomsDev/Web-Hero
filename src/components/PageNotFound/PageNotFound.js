import React from 'react';
import notFound from '../../img/404.jpg'

const PageNotFound = () => {
    return (
        <div className='text-center '>
            <img width='500px' src={notFound} alt="" />
            <h2 className='fw-bold'>Page Not Found</h2>
        </div>
    );
};

export default PageNotFound;