import { CountryType } from "@/lib/Types";
import Image from "next/image";
import React from "react";
import { formatNumber } from "@/lib/numberFormatter";
import { Link } from "lucide-react";

const SingleCountry = ({ countryData }: { countryData: CountryType }) => {
  return (
    <div className="bg-mainBcg rounded-lg p-2 mb-4">
      <div className="aspect-video">
        <Image
            priority
          alt={`country flag of ${countryData.name.official}`}
          src={countryData.flags.svg}
          width={300}
          height={10}
          className="rounded-lg"
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
