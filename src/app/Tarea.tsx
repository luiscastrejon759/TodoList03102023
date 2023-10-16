import React, { useState } from 'react';


export default function item(props){ 
  const handleChange = (event) => {                   
    if (event.target.checked) {
   
      props.aumentar()
    } else {
      props.restar()         
    }        
}; 
  return(  
    <div> 
      
        <li  key={props.item.id}><input type="checkbox" onChange={handleChange}/>{props.item.name}   
        <h1>    
        <button style={{color:'white', fontSize:'20px', border:'none', borderRadius:'4px', background:'red'}}>Editar</button>
        <button style={{color:'white', fontSize:'20px', border:'none', borderRadius:'4px', background:'red'}}>Eliminar</button>
        </h1>
        </li> 
      </div>

                   
    );
}
