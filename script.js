document.addEventListener('DOMContentLoaded', () => {
  const jogosPorPagina = 8;
  const grid = document.getElementById('grid-jogos');
  const paginacao = document.getElementById('paginacao');
  const textoFiltro = document.getElementById('filtro-texto');
  const btnLimpar = document.getElementById('btn-limpar');

  if (!grid || typeof jogos === 'undefined') return;

  let paginaAtual = 1;
  let filtroAtivo = null;

  function criarCard(jogo) {
    const card = document.createElement('div');
    card.className = 'jogo';
    card.dataset.tags = jogo.tags.join(',');
    card.dataset.formato = jogo.formato;

    const tagsHtml = jogo.tags
      .map(tag => `<button class="tag-btn" data-filtro="${tag}">#${tag}</button>`)
      .join('');

    card.innerHTML = `
      <a href="${jogo.link}" class="jogo-img-link" target="_blank" rel="noopener noreferrer">
        <div class="jogo-img">
          <img src="${jogo.imagem}" alt="${jogo.titulo}" loading="lazy">
        </div>
      </a>
      <div class="jogo-info">
        <div class="jogo-titulo">
          <h2><a href="${jogo.link}" target="_blank" rel="noopener noreferrer">${jogo.titulo}</a></h2>
          <button class="jogo-formato" data-filtro="${jogo.formato}">${jogo.formato.toUpperCase()}</button>
        </div>
        <div class="jogo-tags">${tagsHtml}</div>
        <div class="jogo-desc">${jogo.descricao}</div>
        <button class="ler-mais" type="button">Ler mais</button>
      </div>
    `;

    return card;
  }

  jogos.forEach(jogo => grid.appendChild(criarCard(jogo)));
  const cards = Array.from(grid.children);

  function prepararBotoesLerMais() {
    cards.forEach(card => {
      const descricao = card.querySelector('.jogo-desc');
      const botao = card.querySelector('.ler-mais');
      if (!descricao || !botao) return;

      descricao.classList.remove('expandida');
      botao.textContent = 'Ler mais';
      botao.hidden = descricao.scrollHeight <= descricao.clientHeight + 2;
    });
  }

  function getCardsFiltrados() {
    if (!filtroAtivo) return cards;
    return cards.filter(card => {
      const tags = (card.dataset.tags || '').split(',');
      const formato = card.dataset.formato || '';
      return tags.includes(filtroAtivo) || formato === filtroAtivo;
    });
  }

  function renderizar() {
    const visiveis = getCardsFiltrados();
    const totalPaginas = Math.ceil(visiveis.length / jogosPorPagina) || 1;

    if (paginaAtual > totalPaginas) paginaAtual = 1;

    const inicio = (paginaAtual - 1) * jogosPorPagina;
    const fim = inicio + jogosPorPagina;

    cards.forEach(card => {
      card.style.display = 'none';
      const descricao = card.querySelector('.jogo-desc');
      const botaoLerMais = card.querySelector('.ler-mais');
      if (descricao) descricao.classList.remove('expandida');
      if (botaoLerMais) botaoLerMais.textContent = 'Ler mais';
    });

    visiveis.slice(inicio, fim).forEach(card => (card.style.display = ''));

    requestAnimationFrame(prepararBotoesLerMais);
    renderizarPaginacao(totalPaginas);
    atualizarUIFiltro();
  }

  function renderizarPaginacao(totalPaginas) {
    if (!paginacao) return;
    paginacao.innerHTML = '';

    if (totalPaginas <= 1) {
      paginacao.style.display = 'none';
      return;
    }

    paginacao.style.display = '';
    for (let p = 1; p <= totalPaginas; p++) {
      const btn = document.createElement('button');
      btn.className = `pagina-btn ${p === paginaAtual ? 'ativo' : ''}`;
      btn.textContent = p;
      btn.addEventListener('click', () => {
        paginaAtual = p;
        renderizar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      paginacao.appendChild(btn);
    }
  }

  function atualizarUIFiltro() {
    document.querySelectorAll('[data-filtro]').forEach(btn => {
      btn.classList.toggle('ativo', btn.dataset.filtro === filtroAtivo);
    });

    if (textoFiltro) {
      textoFiltro.textContent = filtroAtivo
        ? `Filtrando por: ${filtroAtivo}`
        : 'Mostrando todos os jogos';
    }

    if (btnLimpar) {
      btnLimpar.style.display = filtroAtivo ? 'inline-block' : 'none';
    }
  }

  document.addEventListener('click', e => {
    const btnFiltro = e.target.closest('[data-filtro]');
    if (btnFiltro) {
      const valor = btnFiltro.dataset.filtro;
      filtroAtivo = filtroAtivo === valor ? null : valor;
      paginaAtual = 1;
      renderizar();
      return;
    }

    const btnLerMais = e.target.closest('.ler-mais');
    if (btnLerMais) {
      const card = btnLerMais.closest('.jogo');
      const descricao = card.querySelector('.jogo-desc');
      const expandido = descricao.classList.toggle('expandida');
      btnLerMais.textContent = expandido ? 'Ler menos' : 'Ler mais';
    }
  });

  if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
      filtroAtivo = null;
      paginaAtual = 1;
      renderizar();
    });
  }
const destaques = [
  {
    titulo: 'Enigma do Medo',
    tipo: 'Destaque',
    data: 'Já disponível',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1507580/header.jpg',
    descricao: 'Mia investiga o desaparecimento do pai em uma aventura de investigação paranormal.',
    link: 'https://store.steampowered.com/app/1507580/Enigma_do_Medo/'
  },
  {
    titulo: 'Blue Prince',
    tipo: 'Destaque',
    data: 'Já disponível',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1569580/header.jpg',
    descricao: 'Explore uma mansão misteriosa que muda constantemente enquanto tenta descobrir seus segredos.',
    link: 'https://store.steampowered.com/app/1569580/Blue_Prince/'
  },
  {
    titulo: 'Red Dead Redemption 2',
    tipo: 'Destaque',
    data: 'Já disponível',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg',
    descricao: 'Viva uma grande aventura no Velho Oeste acompanhando Arthur Morgan e a gangue Van der Linde.',
    link: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/'
  },
  {
    titulo: 'Grand Theft Auto V',
    tipo: 'Destaque',
    data: 'Já disponível',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg',
    descricao: 'Explore Los Santos em uma história de crimes, golpes e muita confusão com três protagonistas.',
    link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
  },
  {
    titulo: 'CONTROL',
    tipo: 'Destaque',
    data: 'Já disponível',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/870780/header.jpg',
    descricao: 'Assuma o controle de Jesse Faden e enfrente uma força sobrenatural dentro da misteriosa Federal Bureau of Control.',
    link: 'https://store.steampowered.com/app/870780/Control_Ultimate_Edition/'
  }
];
  const faixa = document.getElementById('carrossel-faixa');
  const dots = document.getElementById('carrossel-dots');
  const anterior = document.getElementById('carrossel-anterior');
  const proximo = document.getElementById('carrossel-proximo');
  let slideAtual = 0;
  let intervaloCarrossel;

  function montarCarrossel() {
    if (!faixa) return;

    faixa.innerHTML = destaques.map((item, index) => `
      <article class="slide ${index === 0 ? 'ativo' : ''}">
        <img src="${item.imagem}" alt="Capa de ${item.titulo}" loading="lazy">
        <div class="slide-overlay"></div>
        <div class="slide-conteudo">
          <span class="slide-tipo">${item.tipo}</span>
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
          <div class="slide-meta">
            <strong>${item.data}</strong>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer">Ver jogo →</a>
          </div>
        </div>
      </article>
    `).join('');

    if (dots) {
      dots.innerHTML = destaques.map((_, index) =>
        `<button class="carrossel-dot ${index === 0 ? 'ativo' : ''}" type="button" aria-label="Ir para o slide ${index + 1}" data-slide="${index}"></button>`
      ).join('');
    }
  }

  function irParaSlide(index) {
    slideAtual = (index + destaques.length) % destaques.length;
    faixa.style.transform = `translateX(-${slideAtual * 100}%)`;

    document.querySelectorAll('.carrossel-dot').forEach((dot, i) => {
      dot.classList.toggle('ativo', i === slideAtual);
    });
  }

  function reiniciarIntervalo() {
    clearInterval(intervaloCarrossel);
    intervaloCarrossel = setInterval(() => irParaSlide(slideAtual + 1), 6000);
  }

  if (faixa) {
    montarCarrossel();
    anterior?.addEventListener('click', () => {
      irParaSlide(slideAtual - 1);
      reiniciarIntervalo();
    });
    proximo?.addEventListener('click', () => {
      irParaSlide(slideAtual + 1);
      reiniciarIntervalo();
    });

    dots?.addEventListener('click', e => {
      const dot = e.target.closest('.carrossel-dot');
      if (!dot) return;
      irParaSlide(Number(dot.dataset.slide));
      reiniciarIntervalo();
    });

    reiniciarIntervalo();
  }

  renderizar();
});
