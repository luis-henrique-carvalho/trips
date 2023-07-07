// Flow
"use client";
import React from "react";
// Components
import DatesPicker from "@/components/DatesPicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import Button from "@/components/Button";

interface TripReservationProps {
  trip: Trip;
}

const TripReservations = ({ trip }: TripReservationProps) => {
  return (
    <div className="flex flex-col px-5 ">
      <div className="flex flex-row gap-4">
        <DatesPicker
          className="w-full"
          placeholderText="Data de inicio"
          onChange={() => {}}
        />
        <DatesPicker
          className="w-full"
          placeholderText="Data final"
          onChange={() => {}}
        />
      </div>

      <Input
        placeholder={`Número de hóspedes (max: ${trip.maxGuests.toString()})`}
        className="mt-4"
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker ">Total: </p>
        <p className="font-medium text-sm text-primaryDarker ">R$2500 </p>
      </div>
      
      <div className="pb-10 border-b border-grayLighter">
        <Button className="mt-3 w-full">Reservar agora</Button>
      </div>
    </div>
  );
};

export default TripReservations;
