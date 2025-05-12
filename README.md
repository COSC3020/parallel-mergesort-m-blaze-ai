# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

Runtime Analysis (Parallel Merge)

Recurrence 
The span: T(n) 
Number of elements: n

In each recursive step:
- The array is recursively split into 2 halves, with each half being sorted in parallel : T(n/2)
- After the two halves are sorted, they are merges sequentially: $\Theta$(n) time

Recurrence of the span: T(n) = T(n/2) + $\Theta$(n)

The span of the parallel mergesort is $\Theta$(n) in the worse case because, while the sorting of the two halves can be done in parallel, each level of recursion requires a sequential merge step, which takes $\Theta$(n) time. This merge step cannot be done in parallel and occurs at every level. As a result, this time accumulates linearly, leading to a total span of $\Theta$(n).


“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

For this assignment, I asked Chat GPT for help regarding the clarity and formatting of my reasoning. Chat GPT also helped me in writing the initial version of code.test.js, which I have adapted to operate similarly to the code.test.js files of other assignments from this class.