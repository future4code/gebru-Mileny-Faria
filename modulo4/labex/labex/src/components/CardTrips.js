import React from "react";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/coordinator";

export const CardTrips = (props) => {
  const navigate = useNavigate();

  return (
    <div key={props.id}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.planet}</p>
      <p>{props.durationInDays}</p>
      <p>{props.date}</p>
      <button
        onClick={() => {
          goToApplicationFormPage(navigate);
        }}
      >
        {props.texto}
      </button>
    </div>
  );
};
