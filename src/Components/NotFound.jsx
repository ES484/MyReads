import React from 'react';
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <div className='vh-100 notFound d-flex justify-content-center align-content-center'>
            <div className='m-5'>
                <h3>404</h3>
                <h4>Page Not Found!</h4>
                <Link to='/' className='btn btn-info text-white'>Go To HomePage</Link>
            </div>
    </div>
    </>
  )
}
