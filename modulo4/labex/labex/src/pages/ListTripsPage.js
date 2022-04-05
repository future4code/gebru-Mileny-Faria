import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom"
import axios from "axios";
import { CardTrip } from "../components/CardTrip";
import { ContainerListTrips } from "../styled/ListTripPageStyled";
import { goBack } from "../routes/coordinator"

export const ListTripsPage = () => {
  const navigate = useNavigate()
  const [trips, setTrips] = useState();

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mileny-faria-gebru/trips"
      )
      .then((res) => setTrips(res.data.trips));
  };

  const listTrips =
    trips &&
    trips.map((trip) => {
      return (
        <div>
          <CardTrip
            tripId={trip.id}
            tripName={trip.name}
            tripDescription={trip.description}
            tripDate={trip.date}
            tripDurationInDays={trip.durationInDays}
          />
        </div>
      );
    });

  return (
  <div>
    <button onClick={() => goBack(navigate)}> Voltar </button>
    <ContainerListTrips>{listTrips}</ContainerListTrips>
    
  </div>
  )
};