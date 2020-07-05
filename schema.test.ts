const { createTestClient } = require("apollo-server-testing");

import server from "./server";
const { query } = createTestClient(server);

const gql = (str: TemplateStringsArray): string => str.join("");

describe("end to end tests", () => {
  it("should fetch country names", async () => {
    const allCountries = gql`
      {
        countries {
          name
        }
      }
    `;

    const result = await query({ query: allCountries });
    const expected = { name: "Aruba" };
    return expect(result.data?.countries[0]).toEqual(expected);
  });
});
