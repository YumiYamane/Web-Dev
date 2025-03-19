# #A
# N = int(input())
# i = 1

# while i * i <= N:
#     print(i * i)
#     i += 1

# #B
# N = int(input())
# i = 2

# while N % i != 0:
#     i += 1

# print(i)

# #C
# N = int(input())
# power_of_two = 1

# while power_of_two <= N:
#     print(power_of_two, end=" ")
#     power_of_two *= 2

# #D
# N = int(input())

# while N % 2 == 0 and N > 1:
#     N //= 2

# if N == 1:
#     print("YES")
# else:
#     print("NO")

#E
N = int(input())
k = 0
power_of_two = 1

while power_of_two < N:
    k += 1
    power_of_two *= 2

print(k)