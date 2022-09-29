import React from 'react';
import Card from './Card';
import style from './Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={style.contenedor}>
      {
        props.cities.map(citie =>(
          <Card
          key={citie.id}
          max={citie.main.temp_max}
          min={citie.main.temp_min}
          name={citie.name}
          img={citie.weather[0].icon}
          onClose={() => alert(citie.name)}
          />
        ))
      }
    </div>
  )
};