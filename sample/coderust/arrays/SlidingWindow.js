let findMaxSlidingWindow = function (arr, windowSize) {

    let result = [];
    if (windowSize > arr.length) {
        return result;
    }

    let window_ = [];
    for (let i = 0; i < windowSize; i++) {
        while (window_.length > 0
            && arr[i] >= arr[window_[window_.length - 1]]) {
            window_.pop();
        }

        window_.push(i);
    }
    result.push(arr[window_[0]]);

    for (let i = windowSize; i < arr.length; i++) {
        while (window_.length > 0
            && arr[i] >= arr[window_[window_.length - 1]]) {
            window_.pop();
        }

        if(window_.length > 0 && window_[0] <= i - windowSize) {
            window_.shift();
        }

        window_.push(i);
        result.push(arr[window_[0]]);
    }

    return result;

};

let sampleInput = [-4, 2, -5, 1, -1, 6];
console.log("Window size 3:");
console.log(findMaxSlidingWindow(sampleInput, 3));

let array = [1, 2, 3, 4, 3, 2, 1, 2, 5];
console.log("Window size 4:");
console.log(findMaxSlidingWindow(array, 4));

console.log("Window size 3:");
console.log(findMaxSlidingWindow(array, 3));

console.log("Window size 5 :");
console.log(findMaxSlidingWindow(array, 5));
