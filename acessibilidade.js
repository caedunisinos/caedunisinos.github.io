// ============================================================
// ACESSIBILIDADE GLOBAL - CAED UNISINOS
// ============================================================

// ===== SALVAR / CARREGAR PREFERÊNCIAS =====
function salvarPreferencia(chave, valor) {
  const prefs = JSON.parse(localStorage.getItem('acessibilidadePrefs')) || {};
  prefs[chave] = valor;
  localStorage.setItem('acessibilidadePrefs', JSON.stringify(prefs));
}

function carregarPreferencias() {
  const body = document.body;
  const prefs = JSON.parse(localStorage.getItem('acessibilidadePrefs')) || {};
  if (prefs.altoContraste) body.classList.add('alto-contraste');
  if (prefs.modoEscuro) body.classList.add('modo-escuro');
  if (prefs.fonteDislexia) body.classList.add('fonte-dislexia');
  if (prefs.animacoesReduzidas) body.classList.add('animacoes-reduzidas');
  const nivel = prefs.tamanhoFonte || 0;
  if (nivel > 0) body.classList.add(`tamanho-fonte-${nivel}`);
}

// ===== TOOLBAR DE ACESSIBILIDADE =====
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('accessibility-toggle');
  const toolbar = document.getElementById('accessibility-toolbar');
  let toolbarAberta = false;

  if (toggleBtn && toolbar) {
    toggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toolbarAberta = !toolbarAberta;
      toolbar.style.display = toolbarAberta ? 'flex' : 'none';
      this.setAttribute('aria-expanded', toolbarAberta);
    });

    document.addEventListener('click', function(e) {
      if (toolbarAberta && !toolbar.contains(e.target) && e.target !== toggleBtn) {
        toolbar.style.display = 'none';
        toolbarAberta = false;
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    const botoes = toolbar.querySelectorAll('[data-acao]');
    botoes.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const acao = this.dataset.acao;
        const body = document.body;

        switch (acao) {
          case 'contraste':
            body.classList.toggle('alto-contraste');
            salvarPreferencia('altoContraste', body.classList.contains('alto-contraste'));
            break;
          case 'modo':
            body.classList.toggle('modo-escuro');
            salvarPreferencia('modoEscuro', body.classList.contains('modo-escuro'));
            break;
          case 'fonte': {
            const nivel = parseInt(this.dataset.nivel);
            for (let i = 0; i <= 3; i++) {
              body.classList.remove(`tamanho-fonte-${i}`);
            }
            if (nivel > 0) body.classList.add(`tamanho-fonte-${nivel}`);
            salvarPreferencia('tamanhoFonte', nivel);
            break;
          }
          case 'dislexia':
            body.classList.toggle('fonte-dislexia');
            salvarPreferencia('fonteDislexia', body.classList.contains('fonte-dislexia'));
            break;
          case 'animacoes':
            body.classList.toggle('animacoes-reduzidas');
            salvarPreferencia('animacoesReduzidas', body.classList.contains('animacoes-reduzidas'));
            break;
          default: break;
        }
      });
    });
  }

  carregarPreferencias();

  // ===== SKIP LINK =====
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', function(e) {
      e.preventDefault();
      const main = document.getElementById('main-content') || document.querySelector('main');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus();
        setTimeout(() => main.removeAttribute('tabindex'), 500);
      }
    });
  }
});

// ============================================================
// LGPD - COOKIES
// ============================================================
function setCookieConsent(choice) {
  localStorage.setItem('cookieConsent', choice);
  const banner = document.getElementById('cookie-consent-banner');
  if (banner) {
    banner.style.opacity = '0';
    banner.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => { banner.style.display = 'none'; }, 500);
  }
}
function acceptCookies() {
  setCookieConsent('accepted');
  console.log('📊 Cookies de análise ativados.');
}
function rejectCookies() {
  setCookieConsent('rejected');
  console.log('❌ Cookies de análise recusados.');
}
document.addEventListener('DOMContentLoaded', function() {
  const consent = localStorage.getItem('cookieConsent');
  if (consent === 'accepted' || consent === 'rejected') {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) banner.style.display = 'none';
  }
});

// ============================================================
// LEITURA POR ÁUDIO (TTS)
// ============================================================
let currentUtterance = null;
let isReading = false;

function readPageAloud() {
  if (isReading) {
    stopReading();
    setTimeout(() => { readPageAloud(); }, 300);
    return;
  }
  const mainContent = document.querySelector('main') || document.body;
  const clone = mainContent.cloneNode(true);
  const removeSelectors = ['nav', 'footer', '.nav-menu', '.top-bar', '.footer-grid', '.visitor-counter', '#cookie-consent-banner'];
  removeSelectors.forEach(selector => {
    const elements = clone.querySelectorAll(selector);
    elements.forEach(el => el.remove());
  });
  let text = clone.textContent || '';
  text = text.replace(/\s+/g, ' ').trim();
  if (!text || text.length < 10) {
    alert('Não há conteúdo suficiente para leitura nesta página.');
    return;
  }
  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.lang = 'pt-BR';
  currentUtterance.rate = 0.9;
  currentUtterance.pitch = 1.0;
  currentUtterance.volume = 1;
  const voices = window.speechSynthesis.getVoices();
  const ptVoice = voices.find(v => v.lang === 'pt-BR' && v.name.includes('Female')) || voices.find(v => v.lang === 'pt-BR') || voices.find(v => v.lang.startsWith('pt'));
  if (ptVoice) { currentUtterance.voice = ptVoice; }
  currentUtterance.onstart = function() {
    isReading = true;
    const btn = document.getElementById('audio-reader-btn');
    if (btn) { btn.innerHTML = '<i class="fas fa-pause"></i> Pausar'; btn.classList.add('listening'); }
    const stopBtn = document.getElementById('audio-stop-btn');
    if (stopBtn) stopBtn.style.display = 'flex';
  };
  currentUtterance.onend = function() {
    isReading = false;
    const btn = document.getElementById('audio-reader-btn');
    if (btn) { btn.innerHTML = '<i class="fas fa-volume-up"></i> Ouvir Página'; btn.classList.remove('listening'); }
    const stopBtn = document.getElementById('audio-stop-btn');
    if (stopBtn) stopBtn.style.display = 'none';
  };
  currentUtterance.onerror = function() {
    isReading = false;
    const btn = document.getElementById('audio-reader-btn');
    if (btn) { btn.innerHTML = '<i class="fas fa-volume-up"></i> Ouvir Página'; btn.classList.remove('listening'); }
    const stopBtn = document.getElementById('audio-stop-btn');
    if (stopBtn) stopBtn.style.display = 'none';
    console.warn('Erro na leitura de áudio.');
  };
  window.speechSynthesis.speak(currentUtterance);
}

function stopReading() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  isReading = false;
  const btn = document.getElementById('audio-reader-btn');
  if (btn) { btn.innerHTML = '<i class="fas fa-volume-up"></i> Ouvir Página'; btn.classList.remove('listening'); }
  const stopBtn = document.getElementById('audio-stop-btn');
  if (stopBtn) stopBtn.style.display = 'none';
}

if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = function() {
    window.speechSynthesis.getVoices();
  };
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && isReading) {
    stopReading();
  }
});

// ============================================================
// COMANDOS DE VOZ (Speech Recognition)
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  const voiceBtn = document.getElementById('voice-btn');
  if (!voiceBtn) return;
  const statusEl = document.getElementById('voice-status');
  let isListening = false;
  let recognition = null;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    if (statusEl) { statusEl.textContent = '❌ Seu navegador não suporta reconhecimento de voz.'; statusEl.style.display = 'block'; }
    voiceBtn.disabled = true;
    voiceBtn.style.opacity = '0.5';
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = function(event) {
    const last = event.results.length - 1;
    const command = event.results[last][0].transcript.toLowerCase().trim();
    if (statusEl) { statusEl.textContent = '🗣️ Comando: "' + command + '"'; statusEl.style.display = 'block'; }
    console.log('Comando de voz:', command);

    const cmd = command.toLowerCase();

    // --- Navegação ---
    if (cmd.includes('ir para notícias') || cmd.includes('notícias')) {
      window.location.href = '/noticias.html';
    } else if (cmd.includes('ir para loja') || cmd.includes('loja')) {
      window.location.href = '/loja.html';
    } else if (cmd.includes('início') || cmd.includes('pagina inicial') || cmd.includes('home')) {
      window.location.href = '/index.html';
    } else if (cmd.includes('voltar')) {
      history.back();
    }
    // --- Modo escuro/claro ---
    else if (cmd.includes('modo escuro') || cmd.includes('escuro')) {
      document.body.classList.add('modo-escuro');
      if (statusEl) statusEl.textContent = '✅ Modo escuro ativado.';
      salvarPreferencia('modoEscuro', true);
    } else if (cmd.includes('modo claro') || cmd.includes('claro')) {
      document.body.classList.remove('modo-escuro');
      if (statusEl) statusEl.textContent = '✅ Modo claro ativado.';
      salvarPreferencia('modoEscuro', false);
    }
    // --- Contraste ---
    else if (cmd.includes('alto contraste') || cmd.includes('contraste alto')) {
      document.body.classList.add('alto-contraste');
      if (statusEl) statusEl.textContent = '✅ Alto contraste ativado.';
      salvarPreferencia('altoContraste', true);
    } else if (cmd.includes('contraste normal') || cmd.includes('normal')) {
      document.body.classList.remove('alto-contraste');
      if (statusEl) statusEl.textContent = '✅ Contraste normal ativado.';
      salvarPreferencia('altoContraste', false);
    }
    // --- Fonte ---
    else if (cmd.includes('aumentar fonte') || cmd.includes('fonte maior')) {
      document.body.classList.remove('tamanho-fonte-1', 'tamanho-fonte-2', 'tamanho-fonte-3');
      document.body.classList.add('tamanho-fonte-2');
      if (statusEl) statusEl.textContent = '✅ Fonte aumentada.';
      salvarPreferencia('tamanhoFonte', 2);
    } else if (cmd.includes('diminuir fonte') || cmd.includes('fonte menor')) {
      document.body.classList.remove('tamanho-fonte-1', 'tamanho-fonte-2', 'tamanho-fonte-3');
      document.body.classList.add('tamanho-fonte-1');
      if (statusEl) statusEl.textContent = '✅ Fonte diminuída.';
      salvarPreferencia('tamanhoFonte', 1);
    } else if (cmd.includes('fonte padrão') || cmd.includes('padrão')) {
      document.body.classList.remove('tamanho-fonte-1', 'tamanho-fonte-2', 'tamanho-fonte-3');
      if (statusEl) statusEl.textContent = '✅ Fonte padrão restaurada.';
      salvarPreferencia('tamanhoFonte', 0);
    }
    // --- Dislexia ---
    else if (cmd.includes('fonte dislexia') || cmd.includes('dislexia')) {
      document.body.classList.toggle('fonte-dislexia');
      if (statusEl) {
        statusEl.textContent = document.body.classList.contains('fonte-dislexia') ? '✅ Fonte para dislexia ativada.' : '✅ Fonte para dislexia desativada.';
      }
      salvarPreferencia('fonteDislexia', document.body.classList.contains('fonte-dislexia'));
    }
    // --- Ajuda ---
    else if (cmd.includes('ajuda') || cmd.includes('comandos') || cmd.includes('o que posso dizer')) {
      if (statusEl) {
        statusEl.textContent = '💡 Comandos: "Ir para notícias", "Ir para loja", "Início", "Voltar", "Modo escuro", "Modo claro", "Alto contraste", "Contraste normal", "Aumentar fonte", "Diminuir fonte", "Fonte padrão", "Fonte dislexia".';
        statusEl.style.display = 'block';
        setTimeout(() => { if (!isListening) statusEl.style.display = 'none'; }, 6000);
      }
    } else {
      if (statusEl) {
        statusEl.textContent = '❓ Comando não reconhecido. Diga "ajuda" para ver os comandos disponíveis.';
        statusEl.style.display = 'block';
        setTimeout(() => { if (!isListening) statusEl.style.display = 'none'; }, 3000);
      }
    }

    if (isListening) {
      setTimeout(() => { try { recognition.start(); } catch(e) {} }, 500);
    }
  };

  recognition.onend = function() {
    if (isListening) {
      try { recognition.start(); } catch(e) {}
    }
  };

  recognition.onerror = function(event) {
    if (event.error === 'not-allowed') {
      if (statusEl) { statusEl.textContent = '❌ Permissão do microfone negada.'; statusEl.style.display = 'block'; }
      isListening = false;
      voiceBtn.classList.remove('listening');
      voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Ativar Comandos de Voz';
      return;
    }
    if (event.error === 'no-speech') {
      if (statusEl) { statusEl.textContent = '⏳ Nada foi ouvido. Tente novamente.'; statusEl.style.display = 'block'; }
      if (isListening) {
        setTimeout(() => { try { recognition.start(); } catch(e) {} }, 500);
      }
      return;
    }
    if (isListening) {
      setTimeout(() => { try { recognition.start(); } catch(e) {} }, 500);
    }
  };

  voiceBtn.addEventListener('click', function() {
    if (isListening) {
      isListening = false;
      recognition.stop();
      voiceBtn.classList.remove('listening');
      voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Ativar Comandos de Voz';
      if (statusEl) { statusEl.textContent = '⏸️ Reconhecimento pausado.'; statusEl.style.display = 'block'; setTimeout(() => { if (!isListening) statusEl.style.display = 'none'; }, 2000); }
    } else {
      isListening = true;
      voiceBtn.classList.add('listening');
      voiceBtn.innerHTML = '<i class="fas fa-stop"></i> Parar Escuta';
      if (statusEl) { statusEl.textContent = '🎤 Ouvindo... Fale um comando.'; statusEl.style.display = 'block'; }
      try { recognition.start(); } catch(e) {}
    }
  });
});

console.log('♿ Acessibilidade e LGPD carregados com sucesso!');
