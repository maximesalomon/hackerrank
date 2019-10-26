lst = [7, 9, 4, 23, 2, 0, 8, 10, 5]

def insertion_sort(lst):
    for i in range(1, len(lst)):
        j = i - 1
        while lst[j] > lst[j + 1] and j >= 0:
            lst[j], lst[j + 1] = lst[j + 1], lst[j]
            j -= 1
    return lst

print(insertion_sort(lst))