function sumFor(data) {

  let total = 0;
  let i = 0;
  for(i = 0; i < data.length; i++) {
    total += data[i];
  }

  return total;

}

function sumWhile(data) {

  let total = 0;
  let i = 0;
  while(i < data.length) {
    total += data[i];
    i++;
  }

  return total;

}

function sumRecursion(data, total) {

if(data.length === 0) {
  return 0;
}

return total += sumRecursion(data[1]);

}

function sumTheSimpleWay(data) {

return _.reduce(data, function(memo, num){ return memo + num; }, 0);

}