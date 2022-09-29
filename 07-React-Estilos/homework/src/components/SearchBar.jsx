import React from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div className={style.contenedor}>
           <input type="text" placeholder='Ciudad...' />
           <button onClick={()=>onSearch('Buscando Ciudad...')}>Agregar</button>
         </div>
};