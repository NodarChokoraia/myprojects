# variables

depositorwithdraw  = 0

howmuchtransacion = 0

bank = 0

person = 0

deposit = 0

withdraw = 0

nodikoTransacion = 0

davitiTransacion = 0

giorgiTransacion= 0
  
back = 0

question = 0

leave = 0
print('Sign up:')


#sign up

    
user1name = input('Name:')
user1card = int(input('Please enter card details:'))
while len(str(user1card))>16 or len(str(user1card))<16:
    print('the car cant have more then 16 numbers or less then 16')
    user1card = int(input('Please enter card details:'))

user1password = input('Enter your password:')
user1corectpassword = input('Please corect your password:')

print('Your account is created you can log in now') 
while user1corectpassword!=user1password:
    user1corectpassword = input('Please corect your password:')
    

#log in


checkOfflineorOnline = False
user1balance = 200
user1chash = 10
user1 = [user1name,user1card,user1password,user1balance,user1chash]
print('Log in')
username = input('Enter your username:')
password = input('Enter your password:')
if username==user1name and password==user1password:
    print('Wellcome'+' '+user1name)
    checkOfflineorOnline=True
while username!=user1name and password!=user1password or username!=user1name and password==user1password or username==user1name and password!=user1password:
    print('Username or password is incorect try again')
    username = input('Enter your username:')
    password = input('Enter your password:')

#user2,user3 and user4
giorgi = 'giorgi'
giorgiCard = 6548428598359836
giorgiBalance = 400

nodiko = 'nodiko'
nodikoCard = 1214124625635779
nodikoBalance = 200

daviti = 'daviti'
davitiCard = 1340876537543246
davitiBalance = 500






#bank pages

bank = int(input('balance(1), deposit or withdraw(2), transicion(3), mydetails(4):'))
while bank > 4 or bank < 1:
    print('number cant be more then 4 or less then 1')
    bank = int(input('balance(1), deposit or withdraw(2), transicion(3), mydetails(4):'))
    
if bank == 1:
    print(str(user1balance)+'$')
    
       
#deposit or withdraw


#-------------------------------------------------------------------------------------------------------------------------



if bank == 4:
    for i in range(0,4):
        print(user1[i])
    


#deposit
if bank==2:
    depositorwithdraw = int(input('deposit(1) or withdraw(2):'))
    
    while depositorwithdraw > 2 or depositorwithdraw < 1:
        print('number cant be more then 2 or less then 1')
        depositorwithdraw = int(input('deposit(1) or withdraw(2):'))





    if depositorwithdraw == 1:
        deposit = int(input('how much you want to deposit in your bank:'))
        while deposit>user1chash:
            print('You dont have that much chash on you pls try again')
            deposit = int(input('how much you want to deposit in your bank:'))


        if deposit<=user1chash:
            print('your deposit went successfully')
            print('your chash is '+str(user1chash))
            user1chash=user1chash-deposit
            user1balance=user1balance+deposit
    #widthdraw

    if depositorwithdraw == 2:
        withdraw = int(input('how much do you want to withdraw:'))
        while withdraw>user1balance:
            print('You dont have that much chash on your balance pls try again')
            withdraw = int(input('how much do you want to withdraw:'))

        if withdraw<=user1balance:
                print('your withdraw went successfully')
                print('your balance is ' + str(user1balance))
                print('your chash is ' + str(user1chash))
                user1balance=user1balance-withdraw
                user1chash=user1chash+withdraw
    

# transicions
if bank == 3:
    person = int(input('which person you want to transper money ? nodiko(1), daviti(2) or giorgi(3):'))


    while person > 3 or person <0:
        print('number cant be less then 0 and more then 3')
        person = int(input('which person you want to transper money ? nodiko(1), daviti(2) or giorgi(3):'))


    if person == 1:
        nodikoTransacion=int(input('The credit card number of nodiko:'))
        while nodikoTransacion!=nodikoCard:
            print('the card didint matched')
            nodikoTransacion=int(input('The credit card number of nodiko:'))
        if nodikoTransacion == nodikoCard:
            print('card matched')
            howmuchtransacion = int(input('how much do you want to transfer to nodiko:'))
            while howmuchtransacion > user1balance:
                print('you dont have that much on your balance tyr again')
                howmuchtransacion = int(input('how much do you want to transfer to nodiko:'))
            user1balance = user1balance - howmuchtransacion
            nodikoBalance = nodikoBalance + howmuchtransacion
            print('your balance is '+ str(user1balance))


    elif person == 2:
        davitiTransacion=int(input('The credit card number of daviti:'))
        while davitiTransacion!=davitiCard:
            print('the card didint matched')
            davitiTransacion=int(input('The credit card number of daviti:'))
        if davitiTransacion == davitiCard:
            print('card matched')
            howmuchtransacion = int(input('how much do you want to transfer to daviti:'))
            while howmuchtransacion > user1balance:
                print('you dont have that much on your balance tyr again')
                howmuchtransacion = int(input('how much do you want to transfer to nodiko:'))
            user1balance = user1balance - howmuchtransacion
            davitiBalance = davitiBalance + howmuchtransacion
            print('your balance is '+ str(user1balance))


    elif person == 3:
        giorgiTransacion=int(input('The credit card number of giorgi:'))
        while giorgiTransacion!=giorgiCard:
            print('the card didint matched')
            giorgiTransacion=int(input('The credit card number of giorgi:'))
        if giorgiTransacion == giorgiCard:
            print('card matched')
            howmuchtransacion = int(input('how much do you want to transfer to giorgi:'))
            while howmuchtransacion > user1balance:
                print('you dont have that much on your balance tyr again')
                howmuchtransacion = int(input('how much do you want to transfer to nodiko:'))
            user1balance = user1balance - howmuchtransacion
            giorgiBalance = giorgiBalance + howmuchtransacion
            print('your balance is '+ str(user1balance))
