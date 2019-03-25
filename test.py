import time

def Fibnacci(n):
    if n==0 or n==1:
        return 1
    else:
        return Fibnacci(n-1) + Fibnacci(n-2)

num=37 
start = time.clock()
Fibnacci(num)
end = time.clock()
print ("Fibnacci sequense costs",end-start)
