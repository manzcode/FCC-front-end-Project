import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="d-flex row justify-content-center p-3 my-3 text-white rounded shadow-sm text-center" style={{backgroundColor: "purple"}}>
   <div className='col-lg-12'>
   <h4 > Welcome to my React project </h4>  </div>
   <div>
 Ceci est l'ensemble des projects que freeCodeCamp nous suggère de 
        faire avant d'êtres certifier Front-end developpeur.
   </div>
   <small><Link to='/'> back </Link></small> 
    </div>
    )
}
