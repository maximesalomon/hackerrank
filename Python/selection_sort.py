arr = [7, 9, 4, 23, 2, 0, 8, 10, 5]

def selection_sort(arr):
    for i in range(0, len(arr) - 1):
        minIndex = i
        for j in range (i + 1, len(arr)):
            if arr[j] < arr[minIndex]:
                minIndex = j
        if minIndex != i:
            arr[i], arr[minIndex] = arr[minIndex], arr[i]
    return arr

print(selection_sort(arr))