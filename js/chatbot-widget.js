// js/chatbot-widget.js - Widget do CAED
const API_URL = "https://fw-chatbot-backend.vercel.app/api/chat";

let chatHistory = [];
let isOpen = false;

function toggleChat() {
  const chatBox = document.getElementById('caed-chat-box');
  isOpen = !isOpen;
  chatBox.style.display = isOpen ? 'flex' : 'none';
}

async function sendMessage() {
  const input = document.getElementById('caed-user-input');
  const text = input.value.trim();
  if (!text) return;

  appendMessage('user', text);
  input.value = '';

  const loadingId = appendMessage('bot', '⏳ Pensando...');

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text, history: chatHistory })
    });

    const data = await response.json();
    
    document.getElementById(loadingId).remove();
    appendMessage('bot', data.reply || 'Desculpe, não entendi.');

    chatHistory.push({ role: 'user', text: text });
    chatHistory.push({ role: 'model', text: data.reply });

  } catch (err) {
    document.getElementById(loadingId).remove();
    appendMessage('bot', '❌ Erro de conexão. Tente novamente.');
  }
}

function appendMessage(role, text) {
  const container = document.getElementById('caed-chat-messages');
  const msgDiv = document.createElement('div');
  const msgId = 'msg-' + Date.now();
  msgDiv.id = msgId;
  msgDiv.className = `message ${role}`;
  msgDiv.innerHTML = text;
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
  return msgId;
}

function handleKeyPress(e) {
  if (e.key === 'Enter') sendMessage();
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('🤖 Assistente CAED carregado!');
});
