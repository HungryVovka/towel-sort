module.exports = function towelSort (matrix) {
    if (!matrix) {return []};
    matrix.map((a, b) => {
        if (b % 2 != 0) {a.reverse()}});
  return matrix.flat()
}
