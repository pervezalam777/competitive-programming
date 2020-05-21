# Ravi Problem
[reference](https://www.codechef.com/problems/RAVIPROB)
Ravi Shankar and Aamir were participating in the monthly college programming competition of VESIT. Ravi Shankar was good in mathematics, and hence Aamir decided to ask a problem to Ravi Shankar.

He gave 2 integers, A and B. Ravi Shankar has to choose B positive numbers such that sum of these B positive numbers is equal to A and the product of these B positive numbers is maximum. Print this value of product.

## Input
First line consists of T - denoting the number of testcases.

Then T lines will consist of 2 space-separated numbers A and B.

## Output
For each testcase, print the maximum value of product whose sum of B positive integers is A.

## Constraints
1 ≤ T ≤ 10
1 ≤ B ≤ 20
B ≤ A ≤ 100

## Example
**Input:**
3
10 3
10 1
7 2
**Output:**
36
10
12

## Explanation
Example case 1. There can be many possibilities like (1,1,8) or (2,3,5). But maximum product will be obtained only when 3 positive integers are 3,4,3 . (sum = 10, product = 36 which is maximum possible).

## Solution
To solve the problem of sum = 10 and product = 36 with three possible numbers. we can pick out 3,3,3 which makes 9 and then add remainder to the any of the number (e.g. to last one) so the answer will be **3,3,4**
- get the dividend = Math.floor(10/3) => 3

Let us take another example of sum = 7 and product is 3*4 with two possible number. 
- get the dividend = Math.floor(7/2); => 3
- take out number of 3 from 7 => 3,3
- add the remainder to last one *3,4*