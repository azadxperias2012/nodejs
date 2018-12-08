const input = [1, 10, 20, 47, 59, 55, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222];

let binarySearch = function(arr, key) {
    return binarySearchRecursive(arr, key, 0, arr.length - 1);
}

let binarySearchRecursive = function(arr, key, low, high) {
    if (low > high)
        return -1;

    let mid = low + Math.floor((high - low) / 2);
    if (key === arr[mid]) {
        return mid;
    } else if (arr[mid] > key) {
        return binarySearchRecursive(arr, key, low, mid - 1);
    } else {
        return binarySearchRecursive(arr, key, mid + 1, high);
    }
}

let binarySearchIterative = function(arr, key) {

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {

        let mid = low + Math.floor((high - low) / 2);

        if (key === arr[mid]) {
            return mid;
        } else if (key < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }

    return -1;
}

let printResult = function(key, index) {
    if (-1 === index) {
        console.log("Key(" + key + ") not found");
    } else {
        console.log("Key(" + key + ") found at index: " + index);
    }
}

console.log("\n====================================");
console.log("Binary Search: Recursive Approach");
console.log("====================================");

printResult(10, binarySearch(input, 10));
printResult(88, binarySearch(input, 88));
printResult(176, binarySearch(input, 176));
printResult(44, binarySearch(input, 44));

console.log("\n====================================");
console.log("Binary Search: Iterative Approach");
console.log("====================================");

printResult(10, binarySearchIterative(input, 10));
printResult(88, binarySearchIterative(input, 88));
printResult(176, binarySearchIterative(input, 176));
printResult(44, binarySearchIterative(input, 44));
