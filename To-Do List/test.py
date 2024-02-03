import subprocess
import requests
import datetime
from pprint import pprint

# Start server
subprocess.Popen("node ./src/index.js", shell=True)
print("<Server started>")

url = 'http://localhost:3000'

# CREATE #
post_url = url + "/task"
data = {
    "author": "John Doe",
    "description": "Do this task",
    "date": str(datetime.datetime.now()),
}

response = requests.post(post_url, json=data)
pprint(response.json())


# READ #
# Get all tasks
get_url = url + "/tasks"
response = requests.get(get_url)
pprint(response.json())

# Get task by id
get_url = url + "/task-id/1"
response = requests.get(get_url)
pprint(response.json())

# Get task by author
get_url = url + "/task-author/John%20Doepy"
response = requests.get(get_url)
pprint(response.json())


# UPDATE #
post_url = url + "/task/1"
data = {
    "id": 1,
    "author": "John Doe",
    "description": "Do that task",
    "date": str(datetime.datetime.now()),
}
response = requests.patch(post_url, json=data)


# DELETE #
delete_url = url + "/task/1"
response = requests.delete(delete_url)
print(response.json())


subprocess.run(['taskkill', '/F', '/IM', f'node.exe'], check=True)
print("<Server closed>")