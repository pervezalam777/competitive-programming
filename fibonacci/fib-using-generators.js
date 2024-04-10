function* fibonacci() {
  let prev = 0;
  let curr = 1;
  
  yield prev;
  yield curr;
  while(true) {
    let next = prev + curr;
    yield next;

    prev = curr;
    curr = next;
  }
}

// get fibonacci upto 12;
const gen = fibonacci();
for (let index = 0; index < 12; index++) {
  console.log(gen.next().value)
}