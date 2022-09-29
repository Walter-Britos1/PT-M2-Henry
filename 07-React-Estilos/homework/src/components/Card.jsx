import React from 'react';
import s from  './Card.module.css'

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
   <div className={s.contenedor}>
    <div className={s.card}>
      <button className={s.btn} onClick={onClose} >X</button>
      <h4>{name}</h4>
      <div className={s.temperaturas}>
        <div>
          <p>Min</p>
          <p>{min}</p>
        </div>
        <div>
          <p>Max</p>
          <p>{max}</p>
        </div>
        <img className={s.img}  src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon" />
      </div>
    </div>
   </div>
  )
};