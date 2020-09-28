
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length < 1) {
        return []
    } else {
        return matrix.map((arr, i) => i % 2 > 0 ? arr.reverse() : arr).flat()
    }
}
