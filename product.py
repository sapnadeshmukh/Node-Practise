test_list=[6,1,3,5,6,3,1]
newarry=[]
product=1

i=0
while (i<len(test_list)):
    if (test_list[i] not in newarry):
        product=product*test_list[i]

        newarry.append(test_list[i])
    i=i+1
print(newarry)
print(product)
