function totalPromotedStudents(data) {
  const promotedStudents = data.filter((student) => student.promoted);

  const totalPromoted = promotedStudents.length;

  const totalPromotedAvgAge =
    Math.floor(
      promotedStudents.reduce((total, student) => total + student.age, 0) /
        totalPromoted
    ) || 0;

  const totalPromotedUnder15 = promotedStudents.filter(
    (student) => student.age < 15
  ).length;

  const totalAgePromotedMale = promotedStudents
    .filter((student) => student.gender === "Male")
    .reduce((total, student) => total + student.age, 0);

  const totalPromotedFemaleAscByAge = promotedStudents
    .filter((student) => student.gender === "Female")
    .sort((a, b) => a.age - b.age);

  return {
    totalPromoted,
    totalPromotedAvgAge,
    totalPromotedUnder15,
    totalAgePromotedMale,
    totalPromotedFemaleAscByAge,
  };
}


export { totalPromotedStudents };
