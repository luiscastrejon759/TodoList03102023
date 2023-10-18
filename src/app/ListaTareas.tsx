import React, { useState }  from 'react';
import Tarea from './Tarea';


export default function tareas(props){

  let numerotareas = props.tareas.length
  const [Completadas,setContadorTerminadas] = useState(0) 
  const aumentarContador = () => {
    setContadorTerminadas(prev => prev + 1)
  }

   const disminuyeContador = () => { 
    setContadorTerminadas(prev => prev - 1);
  }
  
  let con=0;     
  const eliminar = id => {
    console.log('eliminar', id) 
    props.eliminarpadre(id)   
   }

  const edicion = (i,nombre) => {        
    props.edicionpadre(i,nombre)              
  };  

  return(        
    <>
      
      <ul >
          {
          props.tareas.map(tarea => (          
            <Tarea item={tarea} aumentar={aumentarContador} restar={disminuyeContador} edicion={edicion} eliminar={eliminar}/>       
            
          ))
          
          }    
          <h1 style={{color:'black'}}>Tareas agregadas:{numerotareas} </h1> 
          <h1 style={{color:'black'}}>Tareas seleccionadas: {Completadas} </h1> 
      </ul>      
    </>
    );
}