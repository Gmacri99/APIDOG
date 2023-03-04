import React from 'react';
import patita from '../images/png-clipart-dog-paw-printing-paws-animals-monochrome-removebg-preview.png'
const Header = ({title}) => {
    return ( 
    <>
    <div className='py-2 flex justify-center items-center shadow-md shadow-slate-200 bg-[url("../images/cesped.jpg")] Roboto '>
        <img src={patita} alt='patita' className='h-10 w-12'/>
        <h1 className='text-xl'>{title}</h1>
    </div>
    </>
    );
}
 
export default Header;