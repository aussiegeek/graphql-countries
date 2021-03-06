import { data, countriesByCCA3 } from "./countriesData";
import { Resolvers } from "./generated/graphql";

export const countries = () => data;
export const country = (_parent: object, { cca3 }: { cca3: string }) =>
  countriesByCCA3[cca3];

interface StringIndexSignatureInterface {
  [index: string]: any;
}

const resolvers: Resolvers & StringIndexSignatureInterface = {
  Query: { countries, country },
  Country: {
    name: (model) => model.name,
    officialName: (model) => model.officialName,
    tld: (model) => model.tld,
    cca2: (model) => model.cca2,
    ccn3: (model) => model.ccn3,
    cca3: (model) => model.cca3,
    cioc: (model) => model.cioc,
    independent: (model) => model.independent,
    status: (model) => model.status,
    capitalCities: (model) => model.capitalCities,
    altSpellings: (model) => model.altSpellings,
    region: (model) => model.region,
    subregion: (model) => model.subregion,
    emoji: (model) => model.emoji,
    borders: (model) => model.borders.map((cca3) => countriesByCCA3[cca3]),
    names: (model) => model.names,
    currencies: (model) => model.currencies,
    flagURL: (model) => model.flagURL,
    languages: (model) => model.languages,
  },
};

export default resolvers;
