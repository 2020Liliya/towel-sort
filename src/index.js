
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    } else {
        const array = matrix.reduce((accumulator, currentValue, i) => {
            return accumulator.concat((!(i % 2) ? currentValue : currentValue.reverse()));
        }, []);
        return array;
    }

}
