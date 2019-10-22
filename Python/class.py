class Store:
    def __init__(self, name, depts): # constructor
        self.name = name
        self.depts = depts
        self.in_business = True

    def __str__(self):
        s = f"Store: {self.name}\nDepartments:\n"
        for d in self.depts:
            s+= "   " + str(d) + "\n"
        return s

class Dept:
    def __init__(self, number): # constructor
        self.number = number

    def __str__(self):
        return f"Dept: {self.number}"

depts = [
    Dept(1),
    Dept(2),
    Dept(3),
]
my_store = Store("Auchan", depts)
print(my_store)