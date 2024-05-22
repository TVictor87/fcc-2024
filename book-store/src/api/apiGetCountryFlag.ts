// src/api/apiGetCountryFlag.ts

export const apiGetCountryFlag = async (countryCode: string): Promise<string> => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
      const data = await response.json();
      return data[0]?.flags?.svg || '';
    } catch (error) {
      console.error('Error fetching country flag:', error);
      return '';
    }
  };
  