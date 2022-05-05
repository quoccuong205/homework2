function findAllHobbyists(hobby, hobbies) {
  const key = Object.keys(hobbies);
  let arr = [];
  for (let i = 1; i < key.length; i++) {
    hobbies[key[i]].forEach((element) => {
      if (element === hobby) {
        arr.push(key[i]);
      }
    });
  }
  return arr;
}

var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"],
};

console.log(findAllHobbyists("Yoga", hobbies));
