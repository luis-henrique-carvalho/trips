import HeaderBetweenLines from "@/components/HeaderBetweenLines";
import { prisma } from "@/lib/prisma";
import React from "react";

const RecommendedTrips = async () => {
  const data = await fetch("http://localhost:3000/hello")

  return (
    <div>
      <HeaderBetweenLines text="Destinos recomendados" />
      {data && data.map((trip) => <h1>{trip.name}</h1>)}
    </div>
  );
};

export default RecommendedTrips;
