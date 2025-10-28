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

    def move(self, hours):
        self.kuljettumatka += self.nopeus * hours
        return

class ElectricCar(Auto):
    def __init__(self, battery, rekisteritunnus, huippunopeus, nopeus = 0, kuljettumatka = 0):
        super().__init__(rekisteritunnus, huippunopeus, nopeus, kuljettumatka)
        self.battery = battery

    def accelerate(self, nopeuden_muutos):
        super().accelerate(nopeuden_muutos)
        return

    def move(self, hours):
        super().move(hours)
        return

class GasCar(Auto):
    def __init__(self, tank, rekisteritunnus, huippunopeus, nopeus = 0, kuljettumatka = 0):
        super().__init__(rekisteritunnus, huippunopeus, nopeus, kuljettumatka)
        self.tank = tank

    def accelerate(self, nopeuden_muutos):
        super().accelerate(nopeuden_muutos)
        return

    def move(self, hours):
        super().move(hours)
        return