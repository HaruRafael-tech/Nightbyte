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
      <a href="${jogo.link}" class="jogo-img-link">
        <div class="jogo-img">
          <img src="${jogo.imagem}" alt="${jogo.titulo}">
        </div>
      </a>
      <div class="jogo-info">
        <div class="jogo-titulo">
          <h2><a href="${jogo.link}">${jogo.titulo}</a></h2>
          <button class="jogo-formato" data-filtro="${jogo.formato}">
            ${jogo.formato.toUpperCase()}
          </button>
        </div>
        <div class="jogo-tags">${tagsHtml}</div>
        <div class="jogo-desc">${jogo.descricao}</div>
      </div>
    `;

    return card;
  }
  jogos.forEach(jogo => grid.appendChild(criarCard(jogo)));
  const cards = Array.from(grid.children);

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

    cards.forEach(card => (card.style.display = 'none'));
    visiveis.slice(inicio, fim).forEach(card => (card.style.display = ''));

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
    if (!btnFiltro) return;
    const valor = btnFiltro.dataset.filtro;
    filtroAtivo = filtroAtivo === valor ? null : valor;
    paginaAtual = 1;
    renderizar();
  });

  if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
      filtroAtivo = null;
      paginaAtual = 1;
      renderizar();
    });
  }
  renderizar();
}); 