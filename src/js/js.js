function mostrarSecao(pagina) {
  const iframe = document.getElementById('conteudo');
  if (iframe) {
    iframe.src = pagina;
  }
}
