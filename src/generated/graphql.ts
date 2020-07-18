import { Context, CountryModel } from "../models";
import { GraphQLResolveInfo } from "graphql";

export interface Resolvers {
  Country: CountryResolvers;
  Query: QueryResolvers;
  CountryName?: CountryNameResolvers;
  Currency?: CurrencyResolvers;
}

export interface CountryResolvers {
  name: Resolver<CountryModel, {}, string>;
  officialName: Resolver<CountryModel, {}, string>;
  names: Resolver<CountryModel, {}, CountryName[]>;
  tld: Resolver<CountryModel, {}, string[]>;
  cca2: Resolver<CountryModel, {}, string>;
  ccn3: Resolver<CountryModel, {}, string>;
  cca3: Resolver<CountryModel, {}, string>;
  cioc: Resolver<CountryModel, {}, string>;
  independent: Resolver<CountryModel, {}, boolean | null | undefined>;
  status: Resolver<CountryModel, {}, ISO3166Status>;
  currencies: Resolver<CountryModel, {}, Currency[]>;
  capitalCities: Resolver<CountryModel, {}, string[]>;
  altSpellings: Resolver<CountryModel, {}, string[]>;
  region: Resolver<CountryModel, {}, Region>;
  subregion: Resolver<CountryModel, {}, string>;
  emoji: Resolver<CountryModel, {}, string>;
  borders: Resolver<CountryModel, {}, CountryModel[]>;
  flagURL: Resolver<CountryModel, {}, string>;
}

export interface QueryResolvers {
  countries: Resolver<{}, {}, CountryModel[]>;
}

export interface CountryNameResolvers {
  code: Resolver<CountryName, {}, string>;
  official: Resolver<CountryName, {}, string>;
  common: Resolver<CountryName, {}, string>;
  type: Resolver<CountryName, {}, CountryNameType>;
}

export interface CurrencyResolvers {
  code: Resolver<Currency, {}, string>;
  name: Resolver<Currency, {}, string>;
  symbol: Resolver<Currency, {}, string>;
}

export type Resolver<R, A, T> = (
  root: R,
  args: A,
  ctx: Context,
  info: GraphQLResolveInfo
) => T | Promise<T>;

export interface CountryName {
  code: string;
  official: string;
  common: string;
  type: CountryNameType;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export enum ISO3166Status {
  OfficiallyAssigned = "OFFICIALLY_ASSIGNED",
  UserAssigned = "USER_ASSIGNED",
}

export enum CountryNameType {
  Native = "NATIVE",
  Translated = "TRANSLATED",
}

export enum Region {
  Africa = "AFRICA",
  Americas = "AMERICAS",
  Antartic = "ANTARTIC",
  Asia = "ASIA",
  Europe = "EUROPE",
  Oceania = "OCEANIA",
}
