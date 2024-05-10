const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function getVotersSummary(voters) {
  let numYoungVotes = 0;
  let numYoungPeople = 0;
  let numMidVotesPeople = 0;
  let numMidsPeople = 0;
  let numOldVotesPeople = 0;
  let numOldsPeople = 0;

  for (let i = 0; i < voters.length; i++) {
    const voter = voters[i];

    if (voter.age <= 20) {
      numYoungPeople++;
      if (voter.voted) {
        numYoungVotes++;
      }
    } else if (voter.age <= 40) {
      numMidsPeople++;
      if (voter.voted) {
        numMidVotesPeople++;
      }
    } else {
      numOldsPeople++;
      if (voter.voted) {
        numOldVotesPeople++;
      }
    }
  }

  return {
    numYoungVotes,
    numYoungPeople,
    numMidVotesPeople,
    numMidsPeople,
    numOldVotesPeople,
    numOldsPeople
  };
}


/*
If we pass the provided voters array to the function, we expect to return the following output: 


{ numYoungVotes: 0,
 numYoungPeople: 2,
 numMidVotesPeople: 4,
 numMidsPeople: 6,
 numOldVotesPeople: 3,
 numOldsPeople: 4
}

*/

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    getVotersSummary,
  };
}
