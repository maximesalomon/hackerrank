def recurse_factorial(n):
    if n == 0:
        return 1
    return n * recurse_factorial(n - 1)