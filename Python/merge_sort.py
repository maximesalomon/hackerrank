def merge_sort(lst):
    if len(lst) <= 1:
        return lst
    
    middle = int(len(lst) / 2)
    left, right = merge_sort(lst[:middle]), merge_sort(lst[middle:])
    
    return merge(left, right)

def merge(left, right):
    sorted_lst = []
    l = r = 0

    while l < len(left) and r < len(right):
        if left[l] < right[r]:
            sorted_lst.append(left[l])
            l += 1
        else:
            sorted_lst.append(right[r])
            r += 1
    
    sorted_lst.extend(left[l:])
    sorted_lst.extend(right[r:])

    return sorted_lst


num_lst = [23, 7, 13, 1, 88, 27]
print(merge_sort(num_lst))