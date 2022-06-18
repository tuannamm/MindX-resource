/* Bài 2 Repeat String

Viết hàm Javascript thõa mãn yêu cầu sau.

Hàm sẽ nhận 2 tham số đầu vào: chuỗi **`str`** cần repeat 
và count là số lần `**repeat**` */

function repeatString(str, count) {
    if (typeof str !== 'string' || typeof count !== 'number') return false;

    let newStr = '';

    for (let i = 0; i < count; i++) {
        newStr += str;
    }

    return newStr;
}

console.log(repeatString("Duyn", 3));