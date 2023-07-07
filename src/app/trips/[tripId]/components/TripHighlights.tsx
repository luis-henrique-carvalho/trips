import { Trip } from "@prisma/client";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface TripHighlightsProps {
  trip: Trip;
}

const TripHighlights = ({ trip }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col p-5 gap-3">
      <h1 className="text-base font-semibold">Destaques</h1>
      <div className="flex w-full flex-wrap gap-y-[10px] flex-row justify-stretch">
        {trip &&
          trip.highlights.map((iten) => (
            <div className="w-1/2 flex gap-1 flex-row">
              <AiOutlineCheckCircle className="text-primary" />
              <p className="text-[12px] text-grayPrimary ">{iten}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TripHighlights;
