import React  from 'react';

export default function item(props){ 
  return(  
    <div> 
      
        <li  key={props.item.id}><input type="checkbox"/>{props.item.name}
        <h1>    
        <button style={{color:'white', fontSize:'20px', border:'none', borderRadius:'4px', background:'red'}}>Editar</button>
        <button style={{color:'white', fontSize:'20px', border:'none', borderRadius:'4px', background:'red'}}>Eliminar</button>
        </h1>
        </li> 
      </div>

                   
    );
}