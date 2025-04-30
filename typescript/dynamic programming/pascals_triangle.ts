/*
 * Generate Pascal's Triangle given the number of rows (nRows)
 * This is a classic example of dynamic programming, where each row
 * is built based on the values of the previous row.
 */
const pascalsTriangle = (nRows: number): number[][] => {
  // Base case: return empty triangle if no rows are requested
  if (nRows === 0) return [];

  // Initialize triangle with the first row
  const triangle = [[1]];

  // Early return if only one row is requested
  if (nRows === 1) return triangle;

  // Add the second row [1, 1] as it’s always the same
  triangle.push([1, 1]);

  // Build the triangle from the 3rd row onward
  for (let i = 2; i < nRows; i++) {
    const prev = triangle[i - 1]; // previous row
    const temp = [1]; // every row starts with 1

    // Generate the middle values by summing adjacent pairs from the previous row
    for (let j = 1; j < prev.length; j++) {
      temp.push(prev[j - 1] + prev[j]);
    }

    // Every row ends with 1
    temp.push(1);

    // Add the current row to the triangle
    triangle.push(temp);
  }

  return triangle;
};
