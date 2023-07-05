import Input from "@/components/Input";
import React from "react";
import DatesPicker from "@/components/DatesPicker";
import CurrencyInput from "@/components/CurrencyInput";
import Button from "@/components/Button";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center">
      <h1 className="text-2xl font-semibold text-center text-primaryDarker ">
        Encontre sua próxima <span className="text-primary">Viagem!</span>
      </h1>
      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-3">
          <DatesPicker
            onChange={() => {}}
            className="w-full"
            placeholderText="Data de Ida"
          />
          <CurrencyInput
            placeholder="Oraçamento"
            className="text-primaryDarker"
          />
        </div>
        <Button className="">Pesquisar</Button>
      </div>
    </div>
  );
};

export default TripSearch;
