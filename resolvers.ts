import { data, JSONCountry } from "./countriesData";
import {
  Country as GraphQLCountry,
  QueryResolvers,
  Region,
  Iso3166Status,
  Currency,
  CountryName,
} from "./src/generated/graphql";

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

const convertJSONToStatus = (status: string): Iso3166Status => {
  switch (status) {
    case "officially-assigned":
      return Iso3166Status.OfficiallyAssigned;
    case "user-assigned":
      return Iso3166Status.UserAssigned;
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

const jsonCountriesToGraphQL = (
  jsonCountries: JSONCountry[]
): GraphQLCountry[] => {
  return jsonCountries
    .map<GraphQLCountry | undefined>(
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
        };
      }
    )
    .filter((c): c is GraphQLCountry => c !== undefined);
};
const countriesResolver = (countriesData: JSONCountry[]) => () => {
  return jsonCountriesToGraphQL(countriesData);
};

const queryResolvers: QueryResolvers = {
  countries: countriesResolver(data),
};

const resolvers = {
  Query: queryResolvers,
};

export default resolvers;
export { countriesResolver };
