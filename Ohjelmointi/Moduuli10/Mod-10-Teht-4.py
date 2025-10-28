from Ohjelmointi.Classes.Kilpailu import Kilpailu
from Ohjelmointi.Classes.Autot import Auto
import random

participants = []

for i in range(10):
    rekisteri = f"ABC-{i+1}"
    maxspeed = random.randint(100, 200)
    participants.append(Auto(rekisteri, maxspeed))

kilpailu1 = Kilpailu("Suuri romuralli", 8000, participants)
game_over = False
hours_passed = 0

while not game_over:
    kilpailu1.hour_passes()
    hours_passed += 1
    game_over = kilpailu1.game_over()
    if (hours_passed % 10 == 0) and not game_over:
        print("Kymmenen tuntia on kulunut, tässä on tämän hetkinen tilanne. \n")
        kilpailu1.status()
        print("")

print("Kilpailu on päättynyt! Tässä lopulliset tulokset. \n")
kilpailu1.status()

