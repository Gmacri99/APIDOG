import React from 'react';

export const Card=({name,image})=>{
    return(
    <div className='flex justify-center py-4 hover:scale-110 duration-300 hover:mt-5'>
        <div className='grid h-80 w-56 justify-center bg-gradient-to-r from-cyan-100 to-blue-300 rounded shadow-md shadow-slate-300 pb-1 hover:shadow-lg'>
            <img src={image} alt={name} className='w-56 h-64 relative'/>
            <h2 className='py-2 text-center'>{name}</h2>
        </div>
    </div>
    )
}