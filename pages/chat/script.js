// script.js
const socket = io("http://localhost:5000");

let username = prompt("Zadej své jméno:");

socket.emit("send_message", `Uživatel ${username} se připojil.`, "Admin");

function sendMessage() {
    let messageInput = document.getElementById("message");
    let chatBox = document.getElementById("chat-box");

    if (messageInput.value.trim() !== "") {
        // Posílání zprávy na server
        socket.emit("send_message", messageInput.value, username);

        messageInput.value = ""; // Vymazání inputu
    }
}

// Přijímání zpráv
socket.on("receive_message", (data) => {
    let newMessage = document.createElement("div");
    newMessage.textContent = `${data.username}: ${data.message}`;
    newMessage.style.padding = "5px";
    newMessage.style.margin = "5px 0";
    newMessage.style.background = "#d1e7ff";
    newMessage.style.borderRadius = "5px";

    document.getElementById("chat-box").appendChild(newMessage);
});