from Ohjelmointi.Classes.Autot import Auto
import random

class Kilpailu:
    def __init__(self, nimi, pituus, osallistujat):
        self.nimi = nimi
        self.pituus = pituus
        self.osallistujat = osallistujat

    def hour_passes(self):
        for i in self.osallistujat:
            acceleration = random.randint(-10, 15)
            i.accelerate(acceleration)
            i.move(1)

    def status(self):
        print("Rekisteri numero, Huippunopeus, Tämänhetkinen nopeus, Kuljettu matka:")
        for i in self.osallistujat:
            print(
                f"{i.rekisteritunnus},{i.huippunopeus} kilometriä tunnissa,{i.nopeus} kilometriä tunnissa,{i.kuljettumatka} kilometriä.")

    def game_over(self):
        for i in self.osallistujat:
            if i.kuljettumatka >= self.pituus:
                return True