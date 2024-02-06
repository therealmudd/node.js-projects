const socket = io();

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.getElementById('messageInput').value;
    socket.emit('chat message', message);
    document.getElementById('messageInput').value = '';
});

socket.on('chat message', (msg) => {
    const ul = document.getElementById('messages');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(msg));
    ul.appendChild(li);
});