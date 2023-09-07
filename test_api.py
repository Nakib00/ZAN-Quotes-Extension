import requests

url = "https://type.fit/api/quotes"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print("Failed to fetch data")
