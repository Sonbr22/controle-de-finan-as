function mostrarsecao(id) {
  document.querySelectorAll('section').forEach(secao => {
    secao.classList.remove('ativo');
  });

  const ativa = document.getElementById(id);
  if (ativa) ativa.classList.add('ativo');
}
