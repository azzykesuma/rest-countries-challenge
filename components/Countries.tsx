'use client';
import { fetchAllCountry } from '@/lib/fetchCountry';
import { useQuery } from '@tanstack/react-query';
import React, { use, useEffect, useState } from 'react';
import Skeleton from './ui/Skeleton';
import { CountryType } from '@/lib/Types';
import SingleCountry from './SingleCountry';
import { useFilter } from './filterContext';
import { fetchCountryByRegion, fetchCountryByName } from '@/lib/fetchCountry';
import Link from 'next/link';

const Countries = () => {
  const [result, setResult] = useState<CountryType[]>([]);
  const {filter, textFilter} = useFilter();
  const { isLoading, isError } = useQuery<CountryType[]>({
    queryKey: ['countries',],
    queryFn: async () => {
        const data = await fetchAllCountry();
        if(data) {
            setResult(data)
        }
        return data
    },
  });

  const { isLoading: isLoadingFilter, isError: isErrorFilter } = useQuery<CountryType[]>({
    queryKey: ['countries', filter],
    queryFn: async() => {
        const data = filter === 'All' ? await fetchAllCountry() : await fetchCountryByRegion(filter);
        setResult(data)
        return data
    },
    enabled: !!filter,
  });

  const { isLoading: isLoadingText, error } = useQuery<CountryType[]>({
    queryKey: ['countries', textFilter],
    queryFn: async() => {
        const data = textFilter === '' ? await fetchAllCountry() : await fetchCountryByName(textFilter);
        setResult(data)
        return data
    },
    enabled: !!textFilter,
    retry: 0
  });


  if (isLoading || isLoadingFilter || isLoadingText) {
    return (
      <div className='p-4'>
        <div className='flex flex-col gap-2'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    );
  }

  if (isError || isErrorFilter) {
    return <div className='p-4'>Error fetching data</div>;
  }

  if(error) {
    return (
        <div className='p-4 text-center mt-3'>
            <p>
                No data found for search query &apos;{textFilter}&apos;, make sure it&apos;s a proper country name
            </p>
        </div>
    )
  }


  return (
    <div className='p-4 px-8'>
      {result && result.map((country: CountryType) => (
        <div key={country.cca2}>
            <Link href={country.name.common}>
                <SingleCountry countryData={country}/>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default Countries;
