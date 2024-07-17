import { CountryType } from "@/lib/Types";
import Image from "next/image";
import React from "react";
import { formatNumber } from "@/lib/numberFormatter";
import { Link } from "lucide-react";

const SingleCountry = ({ countryData }: { countryData: CountryType }) => {
  return (
    <div className="bg-mainBcg rounded-md mb-4 shadow-lg md:h-[400px]">
      <div className="aspect-video">
        <Image
          priority
          alt={`country flag of ${countryData.name.official}`}
          src={countryData.flags.png}
          width={300}
          height={100}
          className="rounded-t-lg w-full lg:w-[300px]"
        />
      </div>
      <div className="p-6">
        <h1 className="text-lg my-4 font-bold">{countryData.name.common}</h1>
        <p className="font-semibold">
          Population:
          <span className="text-slate-400"> {formatNumber(countryData.population)}</span>
        </p>
        <p className="font-semibold">
          Region:
          <span className="text-slate-400"> {countryData.region}</span>
        </p>
        <p className="font-semibold">
          Capital:
          <span className="text-slate-400"> {countryData.capital}</span>
        </p>
      </div>
    </div>

  );
};

export default SingleCountry;
