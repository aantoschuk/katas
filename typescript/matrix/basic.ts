const matrix = [
  [12, 47, 83, 29],
  [65, 3, 91, 56],
  [18, 77, 34, 60],
  [44, 25, 72, 9],
];

// Just prints the matrix
const quickPrint = (matrix: number[][]) => {
  for (let row of matrix) {
    console.log(...row);
  }
};

/**
 * Prints a 2D matrix to the console with aligned columns.
 * The matrix is printed row by row, with each value padded to the width of the largest number.
 *
 * @param {number[][]} matrix - The 2D array (matrix) to be printed.
 *
 * This function:
 * 1. Determines the width required for each column based on the largest number in the matrix.
 * 2. Iterates over each row of the matrix.
 * 3. Pads each element in the row to the determined width for consistent column alignment.
 * 4. Joins the padded elements with a space and prints the resulting string.
 */
const fancyPrint = (matrix: number[][]) => {
  const width = Math.max(...matrix.flat()).toString().length;

  matrix.forEach((row) => {
    // map each element as a row and add necessary padding only so columns are aligned
    const line = row.map((el) => el.toString().padStart(width)).join(" ");
    console.log(line);
  });
};

// Find and Print the main diagonal of the matrix
const diagonal = (matrix: number[][]) => {
  let s = "";
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) s += i > 0 ? ` ${matrix[i][j]} ` : `${matrix[i][j]}`;
    }
  }
  console.log(s);
};

// Print all 4 borders of matrix
const matrixBorder = (matrix: number[][]) => {
  let u = "",
    l = "",
    r = "",
    b = "";
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) u += matrix[i][j] + " ";
      if (j === 0) l += matrix[i][j] + " ";
      if (i === matrix.length - 1) b += matrix[i][j] + " ";
      if (j === matrix[i].length - 1) r += matrix[i][j] + " ";
    }
  }

  console.log(u);
  console.log(l);
  console.log(r);
  console.log(b);
};

// Multiplies every element of a 2D matrix by a given scalar value.
const scalarMultiply = (matrix: number[][], value: number) =>
  matrix.map((row) => row.map((n) => n * value));
