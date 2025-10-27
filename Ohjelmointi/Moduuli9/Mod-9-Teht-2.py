from Classes.Auto import Auto

auto1 = Auto("ABC-123", 142)
print(f"Juuri luodun auton ominaisuudet ovat: \n"
      f"Rekisteri tunnus = {auto1.rekisteritunnus} \n"
      f"Huippunopeus = {auto1.huippunopeus} kilometriä tunnissa.\n"
      f"Tämänhetkinen nopeus = {auto1.nopeus} \n"
      f"Kuljettu matka = {auto1.kuljettumatka} \n")

auto1.accelerate(30)
auto1.accelerate(70)
auto1.accelerate(50)

print(f"Auton tämänhetkinen nopeus on nyt: {auto1.nopeus} kilometriä tunnissa.")

auto1.accelerate(-200)

print(f"Auton tämänhetkinen nopeus on nyt: {auto1.nopeus} kilometriä tunnissa.")