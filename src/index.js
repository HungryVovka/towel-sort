module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    return matrix.reduce((a, b) => {
        return a.concat(Array.isArray(b) ? towelSort(b) : b);}, []);
}
