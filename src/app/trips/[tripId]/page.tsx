import { prisma } from "@/lib/prisma";
import React from "react";
import TripHeader from "./components/TripHeader";
import TripReservations from "./components/TripReservations";
import TripDescription from "./components/TripDescription";
import TripHighlights from "./components/TripHighlights";

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  return trip;
};

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
  console.log(params.tripId);
  const trip = await getTripDetails(params.tripId);
  if (!trip) return null;

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      <TripReservations trip={trip} />
      <TripDescription description={trip.description} />
      <TripHighlights trip={trip} />
    </div>
  );
};

export default TripDetails;
