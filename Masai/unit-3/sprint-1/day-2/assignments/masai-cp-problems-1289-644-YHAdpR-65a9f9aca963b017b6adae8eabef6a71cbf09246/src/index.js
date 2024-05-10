function studentData(firstName, lastName, age, marksArray, ...hobbies) {
  const fullName = `${firstName} ${lastName}`;
 

  // ================================================================
  const avgMarks = marksArray.reduce((acc, cur) => { return acc + cur; }, 0) / marksArray.length;
  // ==========================OR==============================
//   const avgMarks = marksArray.reduce((acc, cur) =>          acc + cur,    0) / marksArray.length;
  // =================================================================================================================
  
  const result = avgMarks >= 50 ? 'PASS' : 'FAIL';
  
  return {
    fullName,
    age,
    hobbies,
    getInfo() {
      return `${fullName}'s age is ${age}.`;
    },
    getResult() {
      return `Result: ${result}`;
    }
  };
}

export {
  studentData
}
