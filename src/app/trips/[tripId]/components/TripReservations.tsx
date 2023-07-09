// Flow
"use client";
import React from "react";
// Components
import DatesPicker from "@/components/DatesPicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import Button from "@/components/Button";
import { useForm, Controller } from "react-hook-form";

interface TripReservationProps {
  trip: Trip;
}

interface TripReservationForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

const TripReservations = ({ trip }: TripReservationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TripReservationForm>();

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <div className="flex flex-col px-5 ">
      <div className="flex flex-row gap-4">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: "Data inicial é obrigatória",
            },
          }}
          control={control}
          render={({ field }) => (
            <DatesPicker
              error={!!errors?.startDate}
              errorMessage={errors.startDate?.message}
              onChange={field.onChange}
              selected={field.value}
              className="w-full"
              placeholderText="Data inicial"
            />
          )}
        />
        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: "Data final é obrigatória",
            },
          }}
          control={control}
          render={({ field }) => (
            <DatesPicker
              error={!!errors.endDate}
              errorMessage={errors.endDate?.message}
              onChange={field.onChange}
              selected={field.value}
              className="w-full"
              placeholderText="Data final"
            />
          )}
        />
      </div>

      <Input
        {...register("guests", {
          required: {
            value: true,
            message: "Numero de hóspedes é obrigatório",
          },
        })}
        placeholder={`Número de hóspedes (max: ${trip.maxGuests.toString()})`}
        className="mt-4"
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message as string}
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker ">Total: </p>
        <p className="font-medium text-sm text-primaryDarker ">R$2500 </p>
      </div>

      <div className="pb-10 border-b border-grayLighter">
        <Button
          onClick={() => handleSubmit(onSubmit)()}
          className="mt-3 w-full"
        >
          Reservar agora
        </Button>
      </div>
    </div>
  );
};

export default TripReservations;
