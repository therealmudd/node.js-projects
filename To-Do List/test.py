import requests
import datetime

url = 'http://localhost:3000'

# post_url = url + "/task"
data = {
    "id": 3,
    "author": "John Doe",
    "description": "Do that task",
    "date": str(datetime.datetime.now()),
}

# response = requests.post(post_url, json=data)

# print(response.json())

#response = requests.delete(url + "/task/2", data={})

response = requests.patch(url + "/task/3", json=data)

print(response.json())