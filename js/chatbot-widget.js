// js/chatbot-widget.js - Widget do CAED
const API_URL = "https://caed-chatbot-backend.vercel.app/api/chat";

let chatHistory = [];
let isOpen = false;
let isProcessing = false;

function toggleChat() {
  const chatBox = document.getElementById('caed-chat-box');
  isOpen = !isOpen;
  chatBox.style.display = isOpen ? 'flex' : 'none';
  if (isOpen) {
    document.getElementById('caed-user-input').focus();
  }
}

async function sendMessage() {
  const input = document.getElementById('caed-user-input');
  const text = input.value.trim();
  
  // Verificar se está processando ou mensagem vazia
  if (!text || isProcessing || input.disabled) return;

  // Desabilitar input durante o processamento
  input.disabled = true;
  isProcessing = true;
  
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
    
    // Remover mensagem de loading
    const loadingElement = document.getElementById(loadingId);
    if (loadingElement) loadingElement.remove();
    
    appendMessage('bot', data.reply || 'Desculpe, não entendi.');

    // Atualizar histórico apenas se a resposta foi bem-sucedida
    chatHistory.push({ role: 'user', text: text });
    chatHistory.push({ role: 'model', text: data.reply });

  } catch (err) {
    // Remover mensagem de loading
    const loadingElement = document.getElementById(loadingId);
    if (loadingElement) loadingElement.remove();
    
    appendMessage('bot', '❌ Erro de conexão. Tente novamente.');
    console.error('Erro no chat:', err);
  } finally {
    // Reabilitar input
    input.disabled = false;
    isProcessing = false;
    input.focus();
  }
}

function appendMessage(role, text) {
  const container = document.getElementById('caed-chat-messages');
  const msgDiv = document.createElement('div');
  const msgId = 'msg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
  msgDiv.id = msgId;
  msgDiv.className = `message ${role}`;
  
  // Sanitização básica para evitar XSS
  if (role === 'bot') {
    msgDiv.innerHTML = text; // Confiamos no backend, mas mantemos
  } else {
    msgDiv.textContent = text; // Mensagem do usuário como texto puro
  }
  
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
  return msgId;
}

function handleKeyPress(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

// Inicialização do widget
document.addEventListener('DOMContentLoaded', function() {
  console.log('🤖 Assistente CAED carregado!');
  
  // Adicionar evento de clique para fechar ao clicar fora (opcional)
  document.addEventListener('click', function(e) {
    const widget = document.getElementById('caed-chat-widget');
    const chatBox = document.getElementById('caed-chat-box');
    if (isOpen && !widget.contains(e.target)) {
      // Não fechar automaticamente para não atrapalhar o usuário
    }
  });
});
