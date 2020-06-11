import { countriesResolver } from "./resolvers";

describe("resolvers", () => {
  it("returns borders for a country", () => {
    const thailand = countriesResolver().find((c) => c.cca3 === "THA");
    expect(thailand?.borders).toStrictEqual(["MMR", "KHM", "LAO", "MYS"]);
  });
});
