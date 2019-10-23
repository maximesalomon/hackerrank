class Animal: # Base class
    def __init__(self, name):
        self.name = name
    def call(self):
        print("Generic animal sound")

class Vertibrate(Animal):
    def call(self): # Override parent method
        print("Generic vertibrate sound")

class Mammal(Vertibrate):
    pass

class Dog(Mammal):
    def __init__(self, name):
        super().__init__(name)
    def call(self): # Override parent method
        print(f"{self.name} says Wooof")

class Invertibrate(Animal):
    pass

animals = [
    Animal("Dog"),
    Vertibrate("Dog"),
    Mammal("Dog"),
    Dog("Arnold"),
    Invertibrate("Something")
]

for a in animals:
    a.call()