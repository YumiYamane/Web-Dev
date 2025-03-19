#A
def min_of_four(a, b, c, d):
    return min(a, b, c, d)

a, b, c, d = map(int, input().split())
print(min_of_four(a, b, c, d))

#B
def power(a, n):
    result = 1
    for _ in range(n):
        result *= a
    return result

a, n = map(float, input().split())
n = int(n)  
print(power(a, n))

#C
def xor(x, y):
    return 1 if x != y else 0

x, y = map(int, input().split())
print(xor(x, y))

#D
def Election(x, y, z):
    return 1 if (x + y + z) > 1 else 0

x, y, z = map(int, input().split())
print(Election(x, y, z))

#E
import math

def is_prime(n):
    if n <= 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True

n = int(input())
if is_prime(n):
    print("prime")
else:
    print("composite")

#F
def power(a, n):
    if n == 0:
        return 1
    elif n > 0:
        return a * power(a, n - 1)
    else:
        return 1 / power(a, -n)

a, n = map(float, input().split())
print(power(a, int(n)))

#G
def fast_power(a, n):
    result = 1
    while n > 0:
        if n % 2 == 1:
            result *= a
        a *= a
        n //= 2
    return result

a, n = map(float, input().split())
print(fast_power(a, int(n)))