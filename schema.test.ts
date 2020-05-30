import { graphql } from "graphql";
import schema from "./schema";

const gql = (str: TemplateStringsArray): string => str.join("");

describe("end to end tests", () => {
  it("should fetch country names", async () => {
    const query = gql`
      {
        countries {
          name
        }
      }
    `;

    const result = await graphql(schema, query, null, {}, {});
    const expected = { name: "Aruba" };
    return expect(result.data?.countries[0]).toEqual(expected);
  });
});
