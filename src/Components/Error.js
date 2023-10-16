import React from 'react'
import { useRouteError } from 'react-router-dom';

const Err= () =>{
//    here we done the object destructureing 
    const{status , statusText} = useRouteError();

  return (
    <div className='error-op'>
      <h1>Oops! Something it's Wrong</h1>
      <h2>{status + " " + statusText}</h2>
    </div>
  )
}

export default Err;
