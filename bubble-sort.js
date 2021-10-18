/*
* Compare first and two items. If it necessary swap them. After compare second and third items and swap them if necessary... (Now the highest number in the end)
* Then we start again ...
* */


function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
