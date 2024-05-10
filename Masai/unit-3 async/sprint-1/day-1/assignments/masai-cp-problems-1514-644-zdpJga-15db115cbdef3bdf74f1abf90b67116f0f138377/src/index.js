function studentData(firstName, lastName, age, marksArray, ...hobbies) {
  const fullName = `${firstName} ${lastName}`;
  const averageMarks = marksArray.reduce((sum, mark) => sum + mark, 0) / marksArray.length;
  const result = averageMarks >= 50 ? 'PASS' : 'FAIL';

  return {
    fullName,
    age,
    hobbies,
    getInfo: () => `${fullName}'s age is ${age}.`,
    getResult: () => `Result: ${result}`
  }
}

export {
  studentData
}