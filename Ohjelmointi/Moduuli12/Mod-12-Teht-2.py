import requests

API = "19f6d732c205e90611a8f5910cf174bd"
call = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=" + API +"&units=metric"
response = requests.get(call).json()

weather = (response["weather"][0]['main'])
temperature = (response["main"]['temp'])

print(f"{weather}{temperature}")