/**
 All following exams please using Javascript only
 1.
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: 'xxx'}
lastName, note can be empty,
cutstomerID can only be a set digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.
**/

/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
**/
function sortUserName(users) {
  users.sort((a, b) => {
    const userA = `${a.firstName}${a.lastName}${a.customerID}`;
    const userB = `${b.firstName}${b.lastName}${b.customerID}`;

    return userA.localeCompare(userB);
  });

  console.log(users);
}

/**
Q2. Sort by `profession` following the given principle, where `systemAnalytics > engineer > productOwner > freelancer > student`
**/
function sortByType(users) {
  const professions = [
    "student",
    "freelancer",
    "productOwner",
    "engineer",
    "systemAnalytics",
  ];

  users.sort((a, b) => {
    return (
      professions.indexOf(b.profession) - professions.indexOf(a.profession)
    );
  });

  console.log(users);
}
