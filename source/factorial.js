'use strict';

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
    if (!Number.isInteger(n)) {
        throw new Error('Факториал определен только для целых чисел и бесконечности');
    }
    if (n < 0) {
        throw new Error('Факториал не определен для отрицательных чисел');
    }
    
    return Array.from({ length: n }, (_, i) => i + 1)
        .reduce((acc, val) => acc * val, 1);
};
