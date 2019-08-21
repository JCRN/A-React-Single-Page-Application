import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        setLocations(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  console.log("locations", locations);

  return (
    <section className="location-list grid-view">
      <h2>
        {locations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </h2>
    </section>
  );
}
