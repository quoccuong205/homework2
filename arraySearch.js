function numberOfItems(arr, item) {
  // Write the code that goes here
  let count = 0;
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      count += numberOfItems(element, item);
    } else if (element === item) count++;
  });
  return count;
}

var arr = [25, "apple", ["banana", "strawberry", "apple", 25]];
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));
