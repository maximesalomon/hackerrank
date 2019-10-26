lst = [7, 9, 4, 23, 2, 0, 8, 10, 5]

def bubble_sort(lst:
    for i in range(0, len(lst) - 1):
        for j in range(0, len(lst) - 1 - i):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
    return arr

print(bubble_sort(lst))