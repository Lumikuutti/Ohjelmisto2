class Julkaisu:
    def __init__(self, nimi):
        self.nimi = nimi

    def tiedot(self):
        print(f"Julkaisun nimi: {self.nimi}")


class Kirja(Julkaisu):
    def __init__(self, nimi, kirjoittaja, sivut):
        super().__init__(nimi)
        self.kirjoittaja = kirjoittaja
        self.sivut = sivut

    def tiedot(self):
        super().tiedot()
        print(f"Kirjoittaja: {self.kirjoittaja}\n"
              f"Sivuja: {self.sivut}")

class Lehti(Julkaisu):
    def __init__(self, nimi, toimittaja):
        super().__init__(nimi)
        self.toimittaja = toimittaja

    def tiedot(self):
        super().tiedot()
        print(f"Päätoimittaja: {self.toimittaja}")