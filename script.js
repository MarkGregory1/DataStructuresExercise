// 1a
let jedi = [];
// 1b
jedi = ["Luke"];
// 1c
jedi.push("Obi-Wan Kenobi");
// 1d
jedi.unshift("Yoda");
// 1e
console.log(jedi[1]);
// 1f
jedi.splice(2, 1)
console.log(jedi);
// 1g
console.log(jedi.slice(1, 4));
// 2a
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
// 2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
// 2c
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);
// 2d
console.log(starWarsVillians.slice(0, 2));
// 3a
const droids = {
    astromech : "R2-D2",
    protocol : "C-3PO",
    assassin : "IG-88"
};
// 3b
console.log(droids['astromech']);
// 3c
console.log(droids.protocol);
// 3d
droids[`assassin`] = `IG-11`;
console.log(droids);

// BONUS
// 4
// console.log(`Darth Vader`[6]);
console.log(starWarsVillians[0][6]);

// 5
// console.log(starWarsVillians.slice(-4, -3));
console.log(sithLords.slice(-2, -1));

// 6a
const starWarsMovies = [
    { 
        episodeOne: "The Phantom Menace",
        episodeTwo: "Attack of the Clones",
        episodeThree: "Revenge oif the Sith"
    },
    {
        episodeFour: "A New Hope", 
        episodeFive: "The Empire Strikes Back", 
        episodeSix: "Return of the Jedi"
    },
    {
        episodeSeven: "The Force Awakens",
        episodeEight: "The Last Jedi",
        episodeNine: "The Rise of Skywalker"
    }
];

// 6b
starWarsMovies.splice(1, 0, `Solo`, `Rogue One`);
console.log(starWarsMovies);