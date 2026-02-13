const factorial = (n) => {
    if (n < 0) {
        throw new Error('Факториал не определен для отрицательных чисел');
    }
    if (!Number.isInteger(n)) {
        throw new Error('Факториал определен только для целых чисел');
    }

    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; ++i) {
        result *= i;
    }
    return result;
};