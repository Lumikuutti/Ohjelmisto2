import numpy as np

#tehtävä 1.1 a ja b
a = 2.493
b = 0.911

print(np.degrees(a))
print(f"{np.degrees(b)} \n")

#tehtävä 1.2 a ja b

a = 137.7
b = 62.3

print(np.radians(a))
print(f"{np.radians(b)} \n")

#tehtävä 1.3

A = np.array([30, 45, 60, 90, 120, 135, 150, 180, 270, 360])

for degrees in A:
    print(f"{degrees} degrees = {np.radians(degrees)} radians.")