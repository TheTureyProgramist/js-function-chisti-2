const users = [
  { name: "Діма", eyeColor: "коричневий", balance: -100, isActive: true, friends: ["Оля", "Сімя", 'Телик', 'Індики', 'Влад і т.д'],
    gender: "хлопець", email: "theturkeyprogramist12@gmail.com",
    skills: ["HTML,CSS(SCSS);", 'Велосипедингові трюки', 'Догляд за індиками']},
  { name: "Оксана і Катя", eyeColor: "карий", gender: "жінки", isActive: false, balance: 100000,
    friends: ["Kapo", 'Лариса'], age: 40, skills: ["Mова aнглійська"], email: "oksana-kate@gmail.com" }
];

function getBalance(users) {
  return users.reduce((total, user) => total + user.balance, 0);
}
console.log(getBalance(users)); 

function getFriend(users) {
  return users
    .filter(user => user.friends.includes('Телик'))
    .map(user => user.name)
    .sort();
}
console.log(getFriend(users));

function getNames(users) {
  return users
    .sort((a, b) => a.friend - b.friend)  
    .map(user => user.name); 
}
console.log(getNames(users));

function getSkills(users) {
  const formatSkills = [];
  for (const user of users) {
    for (const skill of user.skills) {
      if (formatSkills.indexOf(skill) === -1) formatSkills.push(skill);
    }
  }
  return formatSkills.sort((a, b) => a.localeCompare(b));
}
console.log(getSkills(users));
