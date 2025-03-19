#A
a = int(input())
b = int(input())

if a % 2 != 0:
    a += 1

for i in range(a, b + 1, 2):
    print(i, end=" ")

#B
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b + 1):
    if (i%d == c):
        print(i, end=" ")

#C
import math
a = int(input())
b = int(input())

for i in range(a, b + 1):
    x = int(math.sqrt(i))
    if x*x == i:
        print(i, end=" ")

#D
x = str(input())
d = str(input())

count = 0
for i in x:
    if i == d:
        count += 1
        
print(count)

#E
x = str(input())
sum = 0

for i in x:
    sum += int(i)
print(sum)

#F
x = input().strip()
reversed_x = x[::-1]
result = int(reversed_x)
print(result)

#G
x = int(input())

for i in range(2, int(x**0.5) + 1):
    if x % i == 0:
        print(i)
        break
else:
    print(x)

#H
x = int(input())
divisors = []

for i in range(1, int(x**0.5) + 1):
    if x % i == 0:
        divisors.append(i)
        if i != x // i:
            divisors.append(x // i)

divisors.sort()
print(*divisors)

#I
x = int(input())
count = 0

for i in range(1, int(x**0.5) + 1):
    if x % i == 0:
        count += 1
        if i != x // i:
            count += 1

print(count)

#J
total = 0
for _ in range(100):
    total += int(input())

print(total)

#K
N = int(input())
total = 0

for _ in range(N):
    total += int(input())

print(total)

#L
binary = input()
print(int(binary, 2))

#M
N = int(input())
count = 0

for _ in range(N):
    if int(input()) == 0:
        count += 1

print(count)