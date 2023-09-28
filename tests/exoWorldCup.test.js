import { describe, expect, test } from "@jest/globals";
import {returnAmountOfTeamsPerContinent, teamSelection} from "../src/exoWorldCup.js"

const continentChosen = "CONCACAF"
const continentalRules = [
  {name: 'AFC', amount:8},
  {name: 'CAF', amount:9},
  {name: 'CONCACAF', amount:9}
]

describe("Return amount of teams per continent",()=>{
  test("returnAmountOfTeamsPerContinent",() => {
    expect(returnAmountOfTeamsPerContinent(continentChosen,continentalRules)).toEqual(9);
  })
});

//Todo
describe("Return teams selection per continent",()=>{
  test("returnTeamsPerContinent",() => {
    expect(teamSelection(continentChosen)).toEqual(teamSelection(continentChosen));
  })
});



