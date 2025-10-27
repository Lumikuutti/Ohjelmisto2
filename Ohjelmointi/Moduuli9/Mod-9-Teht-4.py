from Ohjelmointi.Classes.Auto import Auto
import random

participants = []

for i in range(10):
    rekisteri = f"ABC-{i+1}"
    maxspeed = random.randint(100, 200)
    participants.append(Auto(rekisteri, maxspeed))
#kilpailu alkaa
game_over = False
while not game_over:
    for i in range(10):
        acceleration = random.randint(-10, 15)
        participants[i].accelerate(acceleration)
        participants[i].move(1)
        if participants[i].kuljettumatka >= 10000:
            game_over = True

print("Rekisteri numero, Huippunopeus, Tämänhetkinen nopeus, Kuljettu matka:")
for i in range(10):
    print(f"{participants[i].rekisteritunnus},{participants[i].huippunopeus} kilometriä tunnissa,{participants[i].nopeus} kilometriä tunnissa,{participants[i].kuljettumatka} kilometriä.")