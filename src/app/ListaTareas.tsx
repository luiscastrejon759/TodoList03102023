import React, { useState }  from 'react';
import Tarea from './Tarea';

export default function Listado(props){ 

  let numerotareas = props.Listado.length

  return(  
    <>
    <div>
      
     <ul style={{color:'black'}}>
         {props.Listado.map(tarea => (<Tarea item={tarea}/>))}
         
         <h1 style={{color:'black'}}>Total tareas:{numerotareas} </h1> 
         <h1 style={{color:'black'}}>Tareas Completadas: {} </h1> 
      </ul>  
      </div>
      </>   
    );
}