const users = [
  { name: "Діма", eyeColor: "коричневий", balance: -100, isActive: true, friends: "Влад і т.д(10)",
    gender: "хлопець", email: "theturkeyprogramist12@gmail.com",
    skills: "HTML,CSS(SCSS); Велосипедингові трюки; Догляд за індиками"},
  { name: "Оксана і Катя", eyeColor: "карий", gender: "жінки", isActive: false, balance: 100000,
    friends: ["?"], age: 40, skills: ["Англійська мова"], email: "oksana-kate@gmail.com" }
];

function getBalance(users) {
  return users.reduce((total, user) => total + user.balance, 0);
}
console.log(getBalance(users)); 

function getFriend(users) {
  return users
    .map(user => user.friends);
}
console.log(getFriend(users, "1000"));

function getNames(users) {
  return users
    .map(user => user.name);
}
console.log(getNames(users));

function getSkills(users) {
  return users
    .map(user => user.skills).sort();
}
console.log(getSkills(users)); 