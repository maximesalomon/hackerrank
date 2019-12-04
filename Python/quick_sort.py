def quick_sort(lst):
    if len(lst) <= 1:
        return lst
    else:
        pivot = lst.pop()

    left = []
    right = []

    for l in lst:
        if l > pivot:
            right.append(l)
        else:
            left.append(l)

    return quick_sort(left) + [pivot] + quick_sort(right)

num_lst = [23, 7, 13, 1, 88, 27]
print(quick_sort(num_lst))