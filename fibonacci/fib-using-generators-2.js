function* fibonacci(till) {
  let prev = 0;
  let curr = 1;
  
  yield prev;
  yield curr;
  let count = 2;
  while(count < till) {
    let next = prev + curr;
    yield next;

    prev = curr;
    curr = next;
    count++;
  }
  return;
}

// get fibonacci upto 12;
const gen = fibonacci(12);
for (let value of gen){
  console.log(value)
}