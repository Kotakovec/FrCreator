function sendMessage() {
    let messageInput = document.getElementById("message");
    let chatBox = document.getElementById("chat-box");

    if (messageInput.value.trim() !== "") {
        let newMessage = document.createElement("div");
        newMessage.textContent = messageInput.value;
        newMessage.style.padding = "5px";
        newMessage.style.margin = "5px 0";
        newMessage.style.background = "#d1e7ff";
        newMessage.style.borderRadius = "5px";
        
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll dolů

        messageInput.value = ""; // Vymazání inputu
    }
}