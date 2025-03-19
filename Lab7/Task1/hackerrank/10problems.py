#1
def is_leap(year):
    if year % 400 == 0:
        return True
    elif year % 100 == 0:
        return False
    elif year % 4 == 0:
        return True
    else:
        return False

year = int(input())
print(is_leap(year))

#2
n = int(input())
t = tuple(map(int, input().split()))
print(hash(t))

#3
if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    
    grades = sorted(set([score for name, score in students]))
    second_lowest_grade = grades[1]
    
    second_lowest_students = [name for name, score in students if score == second_lowest_grade]
    
    second_lowest_students.sort()
    
    for student in second_lowest_students:
        print(student)

#4
def swap_case(s):
    return s.swapcase()

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)

#5
def split_and_join(line):
    return "-".join(line.split())

if __name__ == '__main__':
    line = input()
    result = split_and_join(line)
    print(result)

#6
def minion_game(string):
    vowels = "AEIOU"
    kevin_score = 0
    stuart_score = 0
    length = len(string)
    
    for i in range(length):
        if string[i] in vowels:
            kevin_score += length - i
        else:
            stuart_score += length - i
    
    if kevin_score > stuart_score:
        print("Kevin", kevin_score)
    elif stuart_score > kevin_score:
        print("Stuart", stuart_score)
    else:
        print("Draw")

if __name__ == '__main__':
    string = input().strip()
    minion_game(string)

#7
from itertools import product

A = list(map(int, input().split()))
B = list(map(int, input().split()))

cartesian_product = product(A, B)

for pair in cartesian_product:
    print(pair, end=" ")

#8
from itertools import permutations

s, n = input().split()
n = int(n)

perm = permutations(sorted(s), n)

for p in perm:
    print("".join(p))

#9
import calendar

month, day, year = map(int, input().split())

day_of_week = calendar.weekday(year, month, day)

print(calendar.day_name[day_of_week].upper())

#10
import math

a = int(input())
b = int(input())

theta_radians = math.atan(a / b)
theta_degrees = math.degrees(theta_radians)

print(f"{round(theta_degrees)}°")