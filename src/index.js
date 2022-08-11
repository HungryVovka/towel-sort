module.exports = function towelSort (matrix) {
    return matrix.reduce((a, b) => {
        return a.concat(Array.isArray(b) ? towelSort(b) : b);}, []);
}
