import fifaRanking from "./json/fifaRanking.js";

export const continentalConditions = [
    {regionName: 'AFC', continent:'Asia', amount:8},
    {regionName: 'CAF', continent:'Africa', amount:9},
    {regionName: 'CONCACAF', continent:'Middle and North America', amount:6},
    {regionName: 'CONMEBOL', continent:'South America', amount:6},
    {regionName: 'OFC', continent:'Oceania', amount:1},
    {regionName: 'UEFA', continent:'Europe', amount:16},
    {regionName: 'Barragistes', amount:2},
    {regionName: 'Organisateur', amount:3}
]

// Retrait des pays organisateurs (fix des données)
export const paysOrganisateurs = (fifaRanking) => {
    return fifaRanking.filter((p) => p.teamName === 'USA'|| p.teamName === 'Mexico' || p.teamName === 'Canada' )
}

export const listePaysSansOrganisateurs = (fifaRanking) => {
    const po = paysOrganisateurs(fifaRanking);
    return fifaRanking.filter((team) => !paysOrganisateurs.includes(team));
}

// Fix des diff entre les terminologies
export const returnMatchingContinent = (regName, conditions) => {
    const matchingContinent = conditions.filter((n) => n.regionName === regName).pop()
    return matchingContinent.continent;
}

export const returnAmountOfTeamsPerContinent = (continent, conditions) => {
    const matchingContinent = conditions.filter((c) => c.continent === continent).pop()
    return matchingContinent.amount;
};


// Sélection des équipes qualifiées en fonction des règles de qualification
export const teamSelection = (regName, conditions) => {
    const continent = returnMatchingContinent(regName,conditions);
    const amount = returnAmountOfTeamsPerContinent(continent, conditions)
    console.log("AMOUNT:::",amount)

    const topTeams = listePaysSansOrganisateurs
        .filter((team) => team.continent === continent)
        .sort((a, b) => a.rank - b.rank)

    const selectedTeams = topTeams.slice(0, amount);

    console.log(selectedTeams)
    return selectedTeams;

}

const qualifiedTeams = [];
continentalConditions.forEach((condition) => {
    const teams = teamSelection(condition.regionName, continentalConditions);
    qualifiedTeams.push(...teams);
});


//TODO: Phase de groupe()
//TODO: Phase élim()
//TODO: Penalty()
//TODO: WeHaveAWinner()