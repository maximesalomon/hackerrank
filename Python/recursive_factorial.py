def recursive_factorial(n):
    if n == 0: # a base case that specify when the recursion terminates
        return 1
    return n * recursive_factorial(n - 1) # rule that reduce all other cases towards a base case
    