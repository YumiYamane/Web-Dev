#A
from math import sqrt

a = float(input())
b = float(input())

c = sqrt(a**2 + b**2)
print(c)

#B
num = int(input())
next_num = num + 1
prev_num = num - 1
print(f'The next number for the number {num} is {next_num}.')
print(f'The previous number for the number {num} is {prev_num}.')

#C
N = int(input())
K = int(input())
num = K//N
print(num)

#D
N = int(input())
K = int(input())
num = K%N
print(num)

#E
v = int(input())
t = int(input())
pos = (v * t % 109 + 109) % 109  
print(pos)