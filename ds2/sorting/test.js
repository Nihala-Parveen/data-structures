const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function bubbleSort(arr) {
    let n = arr.length;
    for (let k = 0; k < n - 1; k++) {
        for (let i = 0; i < n - k - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swapping
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}

function main() {
    rl.question("Enter number of test cases: ", (t) => {
        t = parseInt(t);
        let count = 0;
        let interval = setInterval(() => {
            rl.question("Enter n and m: ", (line) => {
                let [n, m] = line.split(' ').map(Number);
                rl.question("Enter the array: ", (line) => {
                    let arr = line.split(' ').map(Number);

                    bubbleSort(arr);

                    let min_sum = 0, max_sum = 0;
                    for (let i = 0; i < n - m; i++) {
                        min_sum += arr[i];
                    }

                    let rep = n - m;
                    let idx = n - 1;
                    while (rep--) {
                        max_sum += arr[idx];
                        idx--;
                    }

                    console.log(max_sum - min_sum);

                    count++;
                    if (count === t) {
                        clearInterval(interval);
                        rl.close();
                    }
                });
            });
        }, 0);
    });
}

// Run the main function
main();
