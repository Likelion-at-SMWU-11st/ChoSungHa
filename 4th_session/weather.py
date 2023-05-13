import requests
import json

city = "Seoul"
apikey = "40c6ed48210c8f9c624ede2f8d2753af"
api = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apikey}"

result = requests.get(api)
print(result.text)

data = json.loads(result.text)

# print(type(result.text))
# print(type(data))

print(data["name"], "의 날씨입니다.")
print("날씨는 ", data["weather"][0]["main"], "입니다.")
print("현재 온도는", data["main"]["temp"],"입니다.")
print("하지만 체감온도는 ",data["main"]["feels_like"],"입니다.")