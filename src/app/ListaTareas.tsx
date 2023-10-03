import React, { useState }  from 'react';
import Tarea from './Tarea';

export default function Listado(props){ 

  let numerotareas = props.Listado.length

  return(        
     <ul style={{color:'white'}}>
         {props.Listado.map(tarea => (  
          <Tarea item={tarea}/>
         ))}
        <h1 >Total tareas:{numerotareas} </h1>   
      </ul>    
    );
}