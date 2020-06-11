import { Region, ISO3166Status, CountryNameType } from "./generated/graphql";

export type CountryModel = {
  name: string;
  officialName: string;
  names: {
    code: string;
    official: string;
    common: string;
    type: CountryNameType;
  }[];
  tld: Array<string>;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean | null;
  status: ISO3166Status;
  currencies: { code: string; name: string; symbol: string }[];
  capitalCities: Array<string>;
  altSpellings: Array<string>;
  region: Region;
  subregion: string;
  emoji: string;
  borders: string[];
};

export interface Context {}
