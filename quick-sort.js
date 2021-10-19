/*
* It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays,
* according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort.
* The sub-arrays are then sorted recursively.
* */

//swap function
function swap(array, firstIndex, secondIndex) {
  [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
}

// get pivot element
function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}
