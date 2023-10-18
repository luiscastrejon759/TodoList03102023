import React, { useState } from 'react';


export default function item(props){
  
  const [Modificar,setEditando] = useState(false)  
  const [nombre, setNombre ] = useState('')
  const handleChange = (event) => {                   
        if (event.target.checked) {
         
          props.aumentar()
        } else {
          props.restar()         
        }        
  }; 


  const Editar= () =>{         
      props.edicion(props.item.id,nombre)
      setEditando(!Modificar)    
  }

  const Delete= () =>{
    props.eliminar(props.item.id)
  }
  return(
        <li key={props.item.id}>
          <input type="checkbox" onChange={handleChange}/>           
          { Modificar ? <input type='text' name={nombre} onChange={e => setNombre(e.target.value)} ></input> : props.item.name} 
          <button style={{color:'black', fontSize:'15px', border:'none', borderRadius:'4px', background:'green'}} onClick={() => Editar(props.item.id)}>{Modificar ? 'Guardar' :'Editar'}</button>
           <button style={{color:'black', fontSize:'15px', border:'none', borderRadius:'4px', background:'green'}} onClick={() => Delete(props.item.id)}>Eliminar</button>
        </li>                    
      
    );
}