import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import Error from './Error';
import { Loader } from './loader';


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } 
const ApiDog = () => {

    const [data,setData]=useState([])
    const [loader,setLoader]=useState(false)
    const [error,setError]=useState(false)

    const getImage=async(name)=>{
        let image=``
        await fetch(`https://dog.ceo/api/breed/${name}/images/random`)
        .then(res=>res.json()) 
        .then(data=> image=data.message)
        return image;
    }

    const getData= async(url)=>{
        setLoader(true)
        try {
            const res= await fetch(url)
            if(!res.ok){
                let error= new Error("Error detectado")
                error.status= res.status || "00"
                error.statusText=res.statusText || "ocurrio un nuevo error"
            }
            
            const json= await res.json()
            let razas=Object.keys(json.message)
            
            for(let i=0; i <razas.length; i++){
                let imagen=await getImage(razas[i])
                let perro={
                    id:i,
                    name:razas[i],
                    image:imagen
                }

                setData(data=>[...data,perro])
            }
            
        } catch (error) {
            setError(error)
            console.log(error)
            setData(null)
        }
        setLoader(false)
    }

  
    useEffect(()=>{    
        getData(`https://dog.ceo/api/breeds/list/all`)
    },[])

    return (
    <>
        {!loader ? 
        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4'>{data.map((el)=><Card key={el.id} name={capitalizeFirstLetter(el.name)} image={el.image}/>)}</div>: <Loader/>
        }
    </> 
    );
}
 
export default ApiDog;