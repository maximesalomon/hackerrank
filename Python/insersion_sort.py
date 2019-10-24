arr = [7, 9, 4, 23, 2, 0, 8, 10, 5]

def insertion_sort(arr):
    for i in range(1, len(arr)):
        j = i - 1
        while arr[j] > arr[j + 1] and j >= 0:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]
            j -= 1
    return arr

print(insertion_sort(arr))