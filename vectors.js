function findShortest(vectors) {
  // Write the code that goes here
  let min = 999;
  let find;
  for (let i = 0; i < vectors.length; i++) {
    let sum = 0;
    vectors[i].map((element) => {
      sum += Math.pow(element, 2);
    });
    sum = Math.sqrt(sum);
    if (sum < min) {
      min = sum;
      find = vectors[i];
    }
  }
  return find;
}

var vectors = [
  [2, 2, 1],
  [2, 2, 2],
  [3, 3, 3],
];
var shortest = findShortest(vectors);
console.log(shortest);
