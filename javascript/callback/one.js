var sum = () => {
  console.log(10+12);
}

var cal = (sum,abc) => {
  abc(sum);
}

var result = cal(4, 5,sum);
console.log(result);