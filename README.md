# competitive-programming 


## Runtime complexity
How much process power an algorithm require based on increment of input elements.

1) **Constant runtime: (1)**: No matter how may elements we are working with, the algorithm or operation will take same amount of time.

2) **Logarithmic runtime: log(N)**: This time complexity takes marginally increment of time if the number of iteration increases to double. Usually search algorithm should have log(N) complexity.

3) **Leaner runtime: (N)**: If there is a loop iterating through the element and not applying any additional checks on it. It can be a learner runtime complexity.

4) **Quasilinear runtime: N * log(N)**: If you double the number of elements you are iterating over does not double the amount of work. Always assume that any sorting operation is N * log(N)

5) **Quadratic runtime: (N^2)**: Every element in a collection has to be compared to every other element. 'The handshake problem'. there can be a loop inside a loop to iterate through same number of elements.

6) **Exponential runtime: 2^N**: If you add a 'single' element to a collection, the processing require double amount of time.


## Space complexity
How much RAM or space an algorithm require for execution.
