from random import randint

# player_name = 'Maxime'
# player_attack = 10
# player_heal = 23
# player_health = 100

# List >>> player = ['Maxime', 10, 23, 100]

# Dictionaries
player = {
    'name': 'Maxime',
    'attack': 10,
    'heal': 23,
    'health': 100
}

monster = {
    'health': 100,
    'attack': None
}

# print(f"Hello {player['name']}!")

monster['attack'] = randint(7, 16)

player['name'] = input(f"\nWhat's your name >>>   ")

game_running = True

while game_running == True:
    player_choice = input(f"\n{player['name']}, please select an action:\n   [1] Attack\n   [2] Heal\n   [Q] Quit\n\n>>> ")

    if player_choice == '1':
        monster['health'] = monster['health'] - player['attack']
        print(f"\nThe monster health is now {monster['health']}\n")
        if monster['health'] <= 0:
            print("\n>>> You have won :) <<<<\n\n")
            game_running = False

        player['health'] = player['health'] - monster['attack']
        print(f"\n{player['name']} health is now {player['health']}\n")
        if player['health'] <= 0:
            print("\n>>> You have lost :( <<<<\n\n")
            game_running = False

    elif player_choice == "2":
        player['health'] = player['health'] + player['heal']
        print(f"\n{player['name']} health is now {player['health']}\n")
    
    elif player_choice.lower() == "q":
        game_running = False

    else:
        print('\nInvalid input\n')