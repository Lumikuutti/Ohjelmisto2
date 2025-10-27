class Hissi:
    def __init__(self, alin, ylin):
        self.alin = alin
        self.ylin = ylin
        self.kerros = alin

    def up(self):
        self.kerros += 1
        print(f"Olemme kerroksessa {self.kerros}.")

    def down(self):
        self.kerros -= 1
        print(f"Olemme kerroksessa {self.kerros}.")

    def floor(self, kerros):
        while self.kerros != kerros:
            if self.kerros > kerros:
                self.down()
            elif self.kerros < kerros:
                self.up()