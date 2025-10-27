from Ohjelmointi.Classes.Auto import Auto
import random

class Kilpailu:
    def __init__(self, nimi, pituus, osallistujat):
        self.nimi = nimi
        self.pituus = pituus
        self.osallistujat = osallistujat

    def hour_passes(self):
        for i in self.osallistujat:
            acceleration = random.randint(-10, 15)
            self.osallistujat.accelerate(acceleration)
            self.osallistujat.move(1)

    def status(self):
        print("Rekisteri numero, Huippunopeus, Tämänhetkinen nopeus, Kuljettu matka:")
        for i in self.osallistujat:
            print(
                f"{self.osallistujat.rekisteritunnus},{self.osallistujat.huippunopeus} kilometriä tunnissa,{self.osallistujat.nopeus} kilometriä tunnissa,{self.osallistujat.kuljettumatka} kilometriä.")

    def game_over(self):
        for i in self.osallistujat:
            if self.osallistujat.kuljettumatka >= self.pituus:
                return True
            else:
                return False