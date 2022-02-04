const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// findMatching - takes in an array of driver' names and a STRING as arguments
//returns matching list of drivers (has to be case sensetive).


// function findMatching(driversName, name) {
//     for (const drivers of driversName) {
//         console.log(drivers);
//     }
// }

// findMatching(drivers)

function findMatching(driversName, name) {
    for (const drivers of driversName) {
        if (drivers === "Bobby") {
            return [drivers]
        }
    }
}

findMatching(drivers, "Bobby")