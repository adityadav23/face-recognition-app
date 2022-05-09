import React from 'react';
import brain from './brain.png';
import './Logo.css';

const Logo = () =>{
    return(
        <div className='ma4 mt0'>
             <img src = {brain} alt = "brain icon" className='brain'/>
        </div>
    )
}


export default Logo;