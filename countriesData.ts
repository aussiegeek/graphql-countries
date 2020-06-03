import jsonCountries from "./countries.json";

export interface JSONCountry {
  name: {
    common: string;
    official: string;
    native: object;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean | null;
  status: string;
  subregion: string;
  region: string;
  flag: string;
  capital: string[];
  altSpellings: string[];
  currencies: object;
  translations: object;
}

export interface JSONCurrency {
  name: string;
  symbol: string;
}
export const data: JSONCountry[] = jsonCountries;
