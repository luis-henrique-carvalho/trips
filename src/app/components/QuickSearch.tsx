import HeaderBetweenLines from "@/components/HeaderBetweenLines";
import Image from "next/image";
import React from "react";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <HeaderBetweenLines text="Tente pesquisar por" />

      <div className="flex items-center justify-between mt-5">
        <div className="flex flex-col items-center gap-[5px]">
          <Image width={35} height={35} alt="Hotel" src="/hotel-icon.png" />
          <p className="text-sm text-grayPrimary">Hotel</p>
        </div>

        <div className="flex flex-col items-center gap-[5px]">
          <Image width={35} height={35} alt="Fazenda" src="/farm-icon.png" />
          <p className="text-sm text-grayPrimary">Fazenda</p>
        </div>

        <div className="flex flex-col items-center gap-[5px]">
          <Image width={35} height={35} alt="Pousada" src="/cottage-icon.png" />
          <p className="text-sm text-grayPrimary">Pousada</p>
        </div>

        <div className="flex flex-col items-center gap-[5px]">
          <Image width={35} height={35} alt="Chacara" src="/inn-icon.png" />
          <p className="text-sm text-grayPrimary">Chacara</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
