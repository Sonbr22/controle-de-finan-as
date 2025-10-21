function mostrarSecao(id) {
  // Seleciona todas as sections e remove a classe "ativo"
  document.querySelectorAll('section').forEach(secao => {
    secao.classList.remove('ativo');
  });

  // Mostra apenas a section clicada
  const ativa = document.getElementById(id);
  if (ativa) ativa.classList.add('ativo');
}