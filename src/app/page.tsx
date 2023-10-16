'use client'
import React, { useState } from 'react';
import ListaTareas  from './ListaTareas';


let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [tareas, setTarea] = useState([]);

  return (
    <>
      <div className='card-to-do'>

        <h1>Mi Lista Tareas:</h1>
        <input value={name} onChange={e => setName(e.target.value)}/> 
        <button style={{color:'white', fontSize:'15px', border:'2', borderRadius:'4px', background:'red'}} onClick={() => {
          setTarea([...tareas, { id: nextId++, name: name }]);
          setName('');
        }}>Agregar</button>
        <form>
            <label  className="row">
                <ListaTareas Listado={tareas}/>       
            </label>
          </form>   
      </div>    
    </>
  );
}