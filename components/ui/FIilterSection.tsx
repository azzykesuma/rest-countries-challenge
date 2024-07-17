'use client'
import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "./SearchIcon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {  useFilter } from "../filterContext";


const FilterSection = () => {
  const {setFilter, filter , textFilter, setTextFilter} = useFilter();
  const region = [
    {
      value: "All",
      label: "All",
    },    
    {
      value: "Africa",
      label: "Africa",
    },
    {
      value: "America",
      label: "America",
    },
    {
      value: "Asia",
      label: "Asia",
    },
    {
      value: "Europe",
      label: "Europe",
    },
    {
      value: "Oceania",
      label: "Oceania",
    },
  ];
  const handleCountryFilter = (value: string) => {
    setFilter(value)
  }
  
  
  const handleChange = (value: string) => {
    setTextFilter(value)
  }

  const handleClear = () => {
    setTextFilter('')
  }

  return (
    <section className="px-4 md:px-24 mb-6 md:flex md:justify-between md:items-center">
      <div className="relative w-full md:w-1/2 lg:w-1/3">
        <input
          type="text"
          placeholder="Search for a country..."
          className="py-4 pl-20 rounded-md w-full my-6 bg-mainBcg"
          value={textFilter}
          onChange={(e) => handleChange(e.target.value)}
        />
        <div className="absolute top-10 left-10 z-2">
          <SearchIcon />
        </div>
        {textFilter && (
          <button onClick={handleClear} className="absolute right-10 top-10">
            Clear
          </button>
        )}
      </div>
      <Select value={filter} onValueChange={handleCountryFilter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {region.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
};

export default FilterSection;
 