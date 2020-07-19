import jsonCountries from "../countries.json";
import {
  Region,
  ISO3166Status,
  Currency,
  CountryName,
  Language,
} from "./generated/graphql";
import { CountryModel } from "./models";

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
  borders: string[];
  languages: object;
}

const convertJSONToRegion = (region: string): Region | undefined => {
  switch (region) {
    case "Americas":
      return Region.Americas;
    case "Asia":
      return Region.Asia;
    case "Africa":
      return Region.Africa;
    case "Europe":
      return Region.Europe;
    case "Oceania":
      return Region.Oceania;
    case "Antarctic":
      return Region.Antartic;
    default:
      return;
  }
};

const convertJSONToStatus = (status: string): ISO3166Status => {
  switch (status) {
    case "officially-assigned":
      return ISO3166Status.OfficiallyAssigned;
    case "user-assigned":
      return ISO3166Status.UserAssigned;
    default:
      throw status;
  }
};

const convertJSONToCurrencies = (
  currencies: JSONCountry["currencies"]
): Currency[] => {
  return Object.entries(currencies).map<Currency>(([key, value]) => {
    return { ...value, code: key };
  });
};

const convertJSONToLanguages = (
  currencies: JSONCountry["languages"]
): Language[] => {
  return Object.entries(currencies).map<Language>(([key, value]) => {
    return { code: key, name: value };
  });
};

const convertJSONToNames = (
  name: JSONCountry["name"],
  translations: JSONCountry["translations"]
): CountryName[] => {
  return [
    ...Object.entries(name.native).map<CountryName>(([key, value]) => {
      return { ...value, code: key, type: "NATIVE" };
    }),
    ...Object.entries(translations).map<CountryName>(([key, value]) => {
      return { ...value, code: key, type: "TRANSLATED" };
    }),
  ];
};

const jsonCountriesToModel = (jsonCountries: JSONCountry[]): CountryModel[] => {
  return jsonCountries
    .map<CountryModel | undefined>(
      ({
        tld,
        cca2,
        ccn3,
        cca3,
        cioc,
        independent,
        altSpellings,
        subregion,
        flag: emoji,
        capital: capitalCities,
        region: jsonRegion,
        name,
        translations,
        status: jsonStatus,
        currencies: jsonCurrencies,
        borders,
        languages: jsonLanguages,
      }) => {
        const region = convertJSONToRegion(jsonRegion);

        if (!region) {
          return;
        }

        return {
          tld,
          cca2,
          ccn3,
          cca3,
          cioc,
          independent,
          altSpellings,
          subregion,
          name: name.common,
          officialName: name.official,
          names: convertJSONToNames(name, translations),
          status: convertJSONToStatus(jsonStatus),
          currencies: convertJSONToCurrencies(jsonCurrencies),
          capitalCities,
          emoji,
          region,
          borders,
          flagURL: `https://raw.githubusercontent.com/mledoze/countries/master/data/${cca3.toLowerCase()}.svg`,
          languages: convertJSONToLanguages(jsonLanguages),
        };
      }
    )
    .filter((c): c is CountryModel => c !== undefined);
};

export const data: CountryModel[] = jsonCountriesToModel(jsonCountries);
export const countriesByCCA3 = data.reduce<Record<string, CountryModel>>(
  (acc, country) => {
    acc[country.cca3] = country;
    return acc;
  },
  {}
);
