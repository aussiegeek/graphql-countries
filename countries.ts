import jsonCountries from "./countries.json";
import { Country as GraphQLCountry } from "./src/generated/graphql";

export interface Country {
  name: Name;
  // tld: string[];
  cca2: string;
  // ccn3: string;
  cca3: string;
  // cioc: string;
  // independent: boolean | null;
  // status: Status;
  // currencies: any[] | { [key: string]: Currency };
  // idd: Idd;
  // capital: string[];
  // altSpellings: string[];
  // region: Region;
  // subregion: string;
  // languages: { [key: string]: string };
  // translations: { [key: string]: Translation };
  // latlng: number[];
  // landlocked: boolean;
  // borders: string[];
  // area: number;
  // flag: string;
  // demonyms: Demonyms;
  // callingCodes: string[];
}

// export interface Currency {
//   name: string;
//   symbol: string;
// }

// export interface Demonyms {
//   eng: Eng;
//   fra: Eng;
// }

// export interface Eng {
//   f: string;
//   m: string;
// }

// export interface Idd {
//   root: Root;
//   suffixes: string[];
// }

// export enum Root {
//   Empty = "",
//   The1 = "+1",
//   The2 = "+2",
//   The3 = "+3",
//   The4 = "+4",
//   The5 = "+5",
//   The6 = "+6",
//   The7 = "+7",
//   The8 = "+8",
//   The9 = "+9",
// }

export interface Name {
  common: string;
  //   official: string;
  //   native: Record<string, Translation>;
}

// export interface Translation {
//   official: string;
//   common: string;
// }

// export enum Region {
//   Africa = "Africa",
//   Americas = "Americas",
//   Antarctic = "Antarctic",
//   Asia = "Asia",
//   Europe = "Europe",
//   Oceania = "Oceania",
// }

// export enum Status {
//   OfficiallyAssigned = "officially-assigned",
//   UserAssigned = "user-assigned",
// }

const actualJsonCountries: Country[] = jsonCountries;

// const jsonCountryBycc2: Record<string, Country> = actualJsonCountries.reduce<
//   Record<string, Country>
// >((acc, country: Country) => {
//   acc[country.cca2] = country;
//   return acc;
// }, {});

// const countryBycc2: Record<string, GraphQLCountry> = Object.values(
//   jsonCountryBycc2
// ).reduce<Record<string, GraphQLCountry>>((acc, country) => {
//   const borders =
//   acc[country.cca2] = {...country, borders: }
//   return acc;
// }, {});

export const countries: GraphQLCountry[] = actualJsonCountries.map<
  GraphQLCountry
>((country) => {
  return { name: country.name.common };
});
