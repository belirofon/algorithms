//? Изначально пришла мысль использовать сортировку пузырьком но после того как подумал и почитал, понял, что
//? Bubble Sort дает не оптимальный результат
//?    **Bubble Sort**:
//?    - В худшем случае: O(n^2)
//?    - В среднем случае: O(n^2)
//?    - В лучшем случае: O(n)

let arr = [5, 0, 1, 3, 2];

function findMissingNumberBubbleSort(arr) {
  let n = arr.length + 1;
  let totalSum = (n * (n + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return totalSum - actualSum;
}

//? Использование стандартного метода sort под капотом Timsort (комбинацию Insertion Sort и Merge Sort), составляет в среднем O(n log n)
//? Берем за аксиому что у нас в массив приходят только положительные числа и при помощи регурного выражения пишем проверку const regex = /^[0-9]\d*$/;
function findMissingNumber(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  return "Нет пропущенных чисел";
}

let testArr6 = [5, 0, 1, 3, 2];
console.log(findMissingNumber(testArr6)); // outpit: 4

let testArr7 = [7, 9, 10, 11, 12];
let testArr9 = [-7, 9, 10, 11, 12]; // некорректно
console.log(findMissingNumber(testArr9));
let testArr8 = [7, 9, 10, 11, 12];

//?Решение предложенное чат GPT

function findMissingNumberGPT(arr) {
  let n = arr.length + 1;
  let totalSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return totalSum - actualSum;
}

console.log(findMissingNumberGPT(testArr6)); // некорректно
