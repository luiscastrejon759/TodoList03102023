import React, { useState }  from 'react';
import Tarea from './Tarea';

export default function Listado(props){ 

  let numerotareas = props.Listado.length
  const [Terminadas, SetTerminadas] = useState(0)

  const aumentarContador = ()  =>{
    SetTerminadas (prev => prev + 1)
  }

  const disminuyeContador = ()  =>{
    SetTerminadas (prev => prev - 1)
  }

  return(  
    <>
    <div>
      
     <ul style={{color:'black'}}>
         {props.Listado.map(tarea => (
         <Tarea item={tarea} aumentar={aumentarContador} restar={disminuyeContador}/>))}
         
         <h1 style={{color:'black'}}>Total tareas:{numerotareas} </h1> 
         <h1 style={{color:'black'}}>Tareas Completadas: {Terminadas} </h1> 
      </ul>  
      </div>
      </>   
    );
}