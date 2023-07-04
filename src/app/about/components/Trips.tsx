
import { prisma } from "@/lib/prisma";
import React, { useState } from "react";

const getTrips = async () => {
  const trips = await prisma.trip.findMany({});

  return trips;
};

const Trips = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );

  console.log({ data });
  return (
    <div>
      {data.map((iten: any) => (
        <p key={iten.id}>{iten.title}</p>
      ))}
    </div>
  );
};

export default Trips;
