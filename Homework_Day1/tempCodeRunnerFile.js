/* Bài 3
Xóa các phần tử trùng trong mảng một chiều */

function deleteDuplicatedElement(arr) {
    if(!Array.isArray(arr)) return false;

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(deleteDuplicatedElement([1,1,1,2,3,4,5,2,3,4,5,2,3,4]));