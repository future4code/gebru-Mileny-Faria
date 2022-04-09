import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { CardTrips } from "../../components/CardTrips";
import { goToHomePage } from "../../routes/coordinator";

export const ListTripsPage = () => {
  const navigate = useNavigate();
  const BASE_URL =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mileny-faria-gebru/trips";
  const [trips] = useRequestData(BASE_URL);

  const tripsList =
    trips &&
    trips.map((trip) => {
      return (
        <CardTrips
          texto={"Eu Quero"}
          name={trip.name}
          description={trip.description}
          planet={trip.planet}
          durationInDays={trip.durationInDays}
          date={trip.date}
        />
      );
    });

  return (
    <div>
      <h1>List Trip Page</h1>

      {tripsList}
      <button
        onClick={() => {
          goToHomePage(navigate);
        }}
      >
        Ir para Home
      </button>
    </div>
  );
};
