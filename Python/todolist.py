class TodoList:
    def __init__(self, name):
        self.name = name
        self.items = []
    def __str__(self):
        return f"{self.name}: {self.items}"
    def __repr__(self):
        return f"TodoList({repr(self.name)})"

quit = False

all_lists = []

current_list = None

while not quit:
    command = input(f"\n(C)reate new list\n(S)elect list ({current_list})\n(A)dd item\n(Q)uit\n\nWhat would you like to do? ")
    command = command.lower().strip()[0]
    if command == "q": # quit
        quit = True
    elif command == "c": # create
        name = input("Enter list name: ").strip()
        new_list = TodoList(name)
        all_lists.append(new_list)
    elif command == "s": #select
        name = input("Enter list name: ").strip()
        named_list = None
        for l in all_lists:
            if l.name == name:
                named_list = l
                break
        if named_list == None:
            print(f"There is no list named {name}")
        else:
            current_list = named_list

print(all_lists)