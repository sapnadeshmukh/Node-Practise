empty=[]
main=5
list=[[7,8,9,5],[6,2,4,5],[8,5,6,5]]
i=0
sum=0

while i<len(list):
    j=0
    while (j<len(list[i])):
        if main ==list[i][j]:
            sum=sum+(list[i][j])

        j=j+1
    i=i+1
print(sum)
