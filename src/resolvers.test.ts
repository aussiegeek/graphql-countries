import { countries, country } from "./resolvers";

describe("resolvers", () => {
  it("returns borders for a country", () => {
    const thailand = countries().find((c) => c.cca3 === "THA");
    expect(thailand?.borders).toStrictEqual(["MMR", "KHM", "LAO", "MYS"]);
  });

  it("returns null for an invalid country", () => {
    expect(country({}, { cca3: "XYZ" })).toBeUndefined();
  });

  it("returns country data", () => {
    expect(country({}, { cca3: "AUS" })).toMatchObject(
      expect.objectContaining({ cca3: "AUS" })
    );
  });
});
