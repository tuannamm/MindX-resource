/* Bài 3
Xóa các phần tử trùng trong mảng một chiều */

function removeDuplicatedElement(arr) {
  if (!Array.isArray(arr)) return false;

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(removeDuplicatedElement([1, 1, 2, 3, 4, 4, 2, 5, 5, 6]));
