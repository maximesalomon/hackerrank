lst = [7, 9, 4, 23, 2, 0, 8, 10, 5]

def selection_sort(lst):
    for i in range(0, len(lst) - 1):
        minIndex = i
        for j in range (i + 1, len(lst)):
            if lst[j] < lst[minIndex]:
                minIndex = j
        if minIndex != i:
            lst[i], lst[minIndex] = lst[minIndex], lst[i]
    return lst

print(selection_sort(lst))