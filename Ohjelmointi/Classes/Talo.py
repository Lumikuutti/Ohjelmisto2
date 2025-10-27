from Ohjelmointi.Classes.Hissi import Hissi

class Talo:
    def __init__(self, alin, ylin, hissit):
        self.alin = alin
        self.ylin = ylin
        self.hissit = []

        for i in range(hissit):
            self.hissit.append(Hissi(alin,ylin))

    def run_elevator(self, numero, kerrokseen):
        self.hissit[numero].floor(kerrokseen)

    def fire_alarm(self):
        for i in range(len(self.hissit)):
            self.run_elevator(i, self.alin)
