class Auto:
    def __init__(self, rekisteritunnus, huippunopeus, nopeus = 0, kuljettumatka = 0):
        self.rekisteritunnus = rekisteritunnus
        self.huippunopeus = huippunopeus #kilometreinä tunnissa
        self.nopeus = nopeus
        self.kuljettumatka = kuljettumatka

    def accelerate(self, nopeuden_muutos):
        self.nopeus += nopeuden_muutos
        if self.huippunopeus < self.nopeus:
            self.nopeus = self.huippunopeus
        elif self.nopeus < 0:
            self.nopeus = 0
        return
