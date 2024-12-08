function swap(arr, index1, index2) {
    var a;
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Invalid index provided for swapping.");
    }
    a = [arr[index2], arr[index1]], arr[index1] = a[0], arr[index2] = a[1];
    return arr;
}
var numbers = [1, 2, 3, 4];
swap(numbers, 0, 2);
console.log(numbers);
var strings = ["apple", "banana", "cherry"];
swap(strings, 1, 2);
console.log(strings);
