// дз 14 - завд 3, 4
// на уроці розкажу перебираючі методи які були в
// завданнях домашніх та як вони працюють
const users = [
  { name: "Діма", balance: -100, isActive: true, friends: "Влад і т.д(10)", gender: "хлопець",
    skills: "HTML,CSS(SCSS); Велосипедингові трюки; Догляд за індиками" },
  { name: "НФЖ - невідома форма життя", gender: "невідомий", isActive: false, balance: 0,
    friends: ["АФЖ(Альтернативна форма життя)"], skills: ["?"] },
  { name: "Без імені", gender: "невідомий(Анонімний мілярдер)", isActive: true, balance: 50000000 * 20, 
    friends: ["Безос, Маск, Цункенберг"], skills: ["Віджимання грошей"] },
  { name: "塔,蒂亚娜", gender: "забув", isActive: true, balance: 200000, friends: ["1000"], skills: ["JavaСкрипт, Подорожі"] },
  { name: "Два імені: Анна Адольфівна Кліщ, Алла Кондратівна Кадик", gender: "жінка", isActive: true, balance: 1200, 
    friends: ["Хтось таки з друзів є у неї?"], skills: ["Ховатися за деревом"] }
];
function getGender(users, gender) {
  return users
    .filter(user => user.gender.toLowerCase() === gender.toLowerCase())
    .map(user => user.name);
}
console.log(getGender(users, 'невідомий', 'what', "хлопець"));
function getInactive(users) {
  return users.filter(user => !user.isActive);
}
console.log(getInactive(users));
// дз 15
function getsumBalance(users) {
  return users.reduce((total, user) => total + user.balance, 0);
}
console.log(getBalance(users)); 

function getFriend(users, friendName) {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
}
console.log(getFriend(users, "1000"));

function getNames(users) {
  return users
    .slice() 
    .map(user => user.name.skills);
}
console.log(getNames(users));

function getSkills(users) {
  return Array.from(
    new Set(users.flatMap(user => user.skills))
  ).sort();
}
console.log(getSkills(users)); 
