
x = int(input("enter the first number "))

y = int(input("enter the second number "))


def calculator(case):
    match case:
        case 0:
            print("the result is")
            print(x + y)  # type: ignore
        case 1:
            print("the result is")
            print(x - y)
        case 2:
            print("the result is")
            print(x * y)
        case 3:
            print("the result is")
            print(x / y)
        case 4:
            print("the result is")
            print(x**y)
        case 5:
            print("the result is")
            print(x % y)
        case 6:
            print("the result is")
            print(x // y)


list = [
    "addition",
    "subtraction",
    "multiplication",
    "division",
    "exponential",
    "modulo",
    "floor division",
]
for key, x in enumerate(list):
    print("press " + str(key) + " for " + x)

case = input("input the operation you want to perform on first and second number ")
case = int(case)
calculator(case)
