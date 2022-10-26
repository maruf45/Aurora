import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFoundPage = () => {
    return (
        <div className='notFound'>
        <img src="https://i.ibb.co/LhNRdfD/page-not-found.png" alt="" />
         <h1>Oops! You are lost</h1>   
         <Link to='/'>Go Back To Home</Link>
        </div>
    );
};

export default NotFoundPage;