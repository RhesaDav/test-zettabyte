// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  const res = input.sort((a, b) => a - b)
  const median = res[Math.ceil(res.length / 2)]
  return median
}

console.log(result(input));
