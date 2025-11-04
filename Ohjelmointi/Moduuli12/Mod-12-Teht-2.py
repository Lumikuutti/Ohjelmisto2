import requests

API = "api"

city_name = input("Give the name of your city: ")
country_code = input("Give the country code: ")

if country_code == "US":
    state_code = input("Give the state code of your city: ")
    coordinate_call = f"http://api.openweathermap.org/geo/1.0/direct?q={city_name},{state_code},{country_code}&appid={API}"
    coordinates = requests.get(coordinate_call).json()
    longitude = (coordinates[0]['lon'])
    latitude = (coordinates[0]['lat'])

else:
    coordinate_call = f"http://api.openweathermap.org/geo/1.0/direct?q={city_name},{country_code}&appid={API}"
    coordinates = requests.get(coordinate_call).json()
    longitude =(coordinates[0]['lon'])
    latitude = (coordinates[0]['lat'])

call = f"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={API}&units=metric"
response = requests.get(call).json()

weather = (response["weather"][0]['main'])
temperature = (response["main"]['temp'])

print(f"Current weather in {city_name} is: {weather}\nCurrent temperature is: {temperature}")