import React from 'react';
import github from '../images/github.png'
import facebook from '../images/facebook-logo.png'
import LinkedIn from '../images/linkedin.png'
import Instagram from '../images/instagram.png'

const Footer = () => {
    return ( <>
        <div className='w-full bg-gradient-to-r from-gray-300 to-stone-700 grid grid-cols-4 h-16 text-black items-center'>
            <h2 className='text-center tracking-widest text-xl'>APIDOG</h2>
            <p className='col-span-2 text-center'>Free of Copyright 2023</p>
            <div>
                <ul className='flex justify-around items-center'>
                    <a href='https://github.com/Gmacri99' target="_blank"><img src={github} alt='github' className='w-8 h-8 mx-2'/></a>
                    <a href='https://www.facebook.com/profile.php?id=100068846473262' target="_blank"><img src={facebook} alt='facebook' className='w-8 h-8 mx-2'/></a>
                    <a href='https://www.linkedin.com/in/gianny-macri/' target="_blank"><img src={LinkedIn} alt='LinkedIn' className='w-8 h-8 mx-2'/></a>
                    <a href='https://www.instagram.com/macrigianny/?next=%2F' target="_blank"><img src={Instagram} alt='Instagram' className='w-8 h-8 mx-2'/></a>
                </ul>
            </div>
        </div>
    </>);
}
 
export default Footer;