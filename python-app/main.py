import calendar

print('Добро пожаловать в календарь111\n')

year = int(input('Пожалуйста введите год: '))
month = int(input('Пожалуйста введите номер месяца: '))

print(calendar.month(year, month))

print('Всего хорошего!')