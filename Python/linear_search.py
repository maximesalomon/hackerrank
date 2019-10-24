arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

def linear_search(arr, num):
    i = 0
    for a in arr:
        if a == num:
            return i
        else:
            i = i + 1
        

print(linear_search(arr, 7))