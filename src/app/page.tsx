'use client'
import React, { useState } from 'react';
import ListaTareas  from './ListaTareas';

let nextId=0;

export default function List() {
  const [name, setName] = useState('');
  const [tareas, setTarea] = useState([]); 

 
  const edicionpadre = (id,nombre) => {       
   console.log('EP',id,nombre)     
   const  newTareas = tareas.map((tareas)=>{
    if (tareas.id === id){
      return{
        ...tareas,
        name: nombre,
      }
    }
    return tareas
   })
   setTarea(newTareas);
  };  

  const eliminarpadre = i => {  
    const  newTareas = tareas.filter((tareas) => tareas.id !== i);  
    setTarea(newTareas);
   }
  
  return(
    <> 
    
      <div className='card-to-do'> 
   
      <h1>Mi Lista Tareas</h1>
      <input        
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button  style={{color:'black', fontSize:'20px', border:'none', borderRadius:'4px', background:'red'}} onClick={() => {
         if(Object.keys(name).length === 0 ) {
            alert('el campo no puede estar vacio')
            return
        }
          setTarea(
            [
              ...tareas,
              { id: nextId++, name: name }
            ]
          );          
          setName('');
        
      }} type='submit'>Nueva Tarea</button>               
          
          <label  className="row">
            <div className="col-md-3" style={{border: '1px solid black'}}>
              <ListaTareas tareas={tareas}  eliminarpadre={eliminarpadre} edicionpadre={edicionpadre}/>        
            </div>
          </label>  
          </div>   
    </>
  );
}