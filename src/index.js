module.exports = function towelSort(matrix) {
  let result = [];
  if (matrix) {
      for (let i = 0; i < matrix.length; i++) {
          if (i % 2 !== 0) {
              result.push(matrix[i].reverse());
          } else {
              result.push(matrix[i]);
          }
      }
      return result.flat();
  }
  return [];
};
