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