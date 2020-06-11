import { data } from "./countriesData";
import { CountryModel } from "./src/models";
import {
  ISO3166Status,
  Region,
  CountryNameType,
} from "./src/generated/graphql";

describe("translate country from JSON to CountryModel", () => {
  it("translates correctly", () => {
    const expected: CountryModel = {
      name: "Aruba",
      officialName: "Aruba",
      names: [
        {
          code: "nld",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Native,
        },
        {
          code: "pap",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Native,
        },
        {
          code: "ces",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "deu",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "est",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "fin",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "fra",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "hrv",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "hun",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "ita",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "jpn",
          common: "アルバ",
          official: "アルバ",
          type: CountryNameType.Translated,
        },
        {
          code: "kor",
          common: "아루바",
          official: "아루바",
          type: CountryNameType.Translated,
        },
        {
          code: "nld",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "per",
          common: "آروبا",
          official: "آروبا",
          type: CountryNameType.Translated,
        },
        {
          code: "pol",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "por",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "rus",
          common: "Аруба",
          official: "Аруба",
          type: CountryNameType.Translated,
        },
        {
          code: "slk",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "spa",
          common: "Aruba",
          official: "Aruba",
          type: CountryNameType.Translated,
        },
        {
          code: "urd",
          common: "اروبا",
          official: "اروبا",
          type: CountryNameType.Translated,
        },
        {
          code: "zho",
          common: "阿鲁巴",
          official: "阿鲁巴",
          type: CountryNameType.Translated,
        },
      ],
      tld: [".aw"],
      cca2: "AW",
      ccn3: "533",
      cca3: "ABW",
      cioc: "ARU",
      independent: false,
      status: ISO3166Status.OfficiallyAssigned,
      currencies: [
        {
          code: "AWG",
          name: "Aruban florin",
          symbol: "ƒ",
        },
      ],
      capitalCities: ["Oranjestad"],
      altSpellings: ["AW"],
      region: Region.Americas,
      subregion: "Caribbean",
      emoji: "🇦🇼",
    };
    expect(expected).toEqual(data[0]);
  });
});
