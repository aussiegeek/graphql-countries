import jsonCountries from "./countries.json";
import {
  Country as GraphQLCountry,
  QueryResolvers,
} from "./src/generated/graphql";

const countries: GraphQLCountry[] = jsonCountries.map((country) => {
  return { name: country.name.common };
});

const countriesResolver: QueryResolvers["countries"] = (_parent, _args) =>
  countries;

const queryResolvers: QueryResolvers = {
  countries: countriesResolver,
};

const resolvers = {
  Query: queryResolvers,
};

export default resolvers;
