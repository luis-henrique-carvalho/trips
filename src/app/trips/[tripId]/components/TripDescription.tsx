import { Trip } from "@prisma/client";
import React from "react";

interface TripDescriptionProps {
  description: string;
}

const TripDescription = ({ description }: TripDescriptionProps) => {
  return (
    <div className="flex flex-col pt-10 p-5 gap-1">
      <h2 className=" text-primaryDarker font-semibold">Sobre a Viagem</h2>
      <p className="text-xs leading-5">{description}</p>
    </div>
  );
};

export default TripDescription;
