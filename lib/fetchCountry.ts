const axios = require('axios').default;

export const fetchAllCountry = async () => {
  const response = await axios.get(`https://restcountries.com/v3.1/all`);
  return response.data;
};

export const fetchCountryByName = async (name: string) => {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    return response.data;
}

export const fetchCountryByRegion = async (region: string) => {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    return response.data;
}
export const fetchCountryByCode = async (code: string) => {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    return response.data;
}

