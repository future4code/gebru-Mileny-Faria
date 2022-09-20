import React from 'react'

export const MovieCard = (props) => {
  return (
    <div onClick={props.onClick}>
      <img
        component={"img"}
        alt={props.title}
        height={"220px"}
        image={props.image}
        title={props.title}
      />
      <div>
        <h5>{props.title}</h5>
      </div>
    </div>
  )
}
