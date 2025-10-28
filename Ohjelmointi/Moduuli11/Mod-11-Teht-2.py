from Ohjelmointi.Classes.Autot import Auto, ElectricCar, GasCar

car1 = ElectricCar(52.5, "ABC-15", 180)
car2 = GasCar(32.3, "ACD-123", 165)

car1.accelerate(60)
car2.accelerate(75)

car1.move(3)
car2.move(3)

print(f"Rekisteröity auto {car1.rekisteritunnus} ajoi {car1.kuljettumatka} kilometriä.")
print(f"Rekisteröity auto {car2.rekisteritunnus} ajoi {car2.kuljettumatka} kilometriä.")