daysinweek = ['monday', 'tuesday', 'friday']
numbers = [1, 2, 3, 4, 5, 6]
print(daysinweek[1])
print(numbers[3])
print(daysinweek[-2])
print(len(daysinweek))
print(max(daysinweek))
print(min(daysinweek))
print(numbers[2:4])
for i in numbers:
    if i > 3:
        print(i)

listcomp = [i for i in numbers if i > 3]
print(i)
numbers.insert(3, 6)
print(numbers)
numbers.remove(6)
print(numbers)
numbers.reverse()
print(numbers)
items = ['rice', 'beans', 'spag', 'garri', 'tomato',
         'pepper', 'salt', 'maggi', 'wine', 'hypo', 'cloth']
print(items)
print(len(items))
print(items[0:6])
listcomp = ['bought ' + i for i in items]
print(listcomp)
items.append('gift')
print(items)
