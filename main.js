document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.querySelector('.bx-brightness-half');
  const body = document.body;

  // Adiciona um ouvinte de evento ao botão
  darkModeToggle.addEventListener('click', function () {
      // Alternar a classe 'dark-mode' no corpo do documento
      body.classList.toggle('dark-mode');
  });
});

// scroll bar de progresso no site

document.addEventListener('scroll', function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;

  document.getElementById('progress').style.width = scrolled + '%';
});