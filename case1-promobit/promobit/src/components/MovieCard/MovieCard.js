import React from 'react'

export const MovieCard = (props) => {
  return (
    <div key={props.id}>
      <img src={props.img} />
      <div>
        <h5>{props.title}</h5>
        <h3>{props.date}</h3>
      </div>
    </div>
  )
}
