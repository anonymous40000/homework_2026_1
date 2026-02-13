/**
 * Вычисляет факториал числа n (n!)
 * 
 * @param {number} n - Неотрицательное целое число
 * @returns {number} Факториал числа n
 * @throws {Error} Если n отрицательное число
 * @throws {Error} Если n не является целым числом
 * 
 * @example
 * factorial(5); // 120
 * factorial(0); // 1
 * factorial(3); // 6
 */
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

