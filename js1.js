// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  let res = [[],[]]
  number.forEach(element => {
    if (element%2 == 0) {
      res[1].push(element)
    }else {
      res[0].push(element)
    }
  });
  return res
}

console.log(result(number));