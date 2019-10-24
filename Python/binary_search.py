arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

def binary_search(arr, num):
    low = arr[0]
    high = len(arr) - 1
    while low <= high:
        middle = (low + high) // 2
        if middle == num:
            return f"The number your were looking for ({num}) was found."
        elif num < arr[middle]:
            high = middle - 1
        elif num > arr[middle]:
            low = middle + 1
    return "We could not find the number you were looking for."

print(binary_search(arr, 20))
print(binary_search(arr, 0))
print(binary_search(arr, 7))
print(binary_search(arr, 9))
