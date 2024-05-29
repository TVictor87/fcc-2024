// src/api/apiGetCountryFlag.ts
import { COUNTRY_FLAG_API_URL } from "../config";

export const apiGetCountryFlag = async (
  countryCode: string
): Promise<string> => {
  try {
    const response = await fetch(`${COUNTRY_FLAG_API_URL}/${countryCode}`);
    const data = await response.json();
    return data[0]?.flags?.svg || "";
  } catch (error) {
    console.error("Error fetching country flag:", error);
    return "";
  }
};
