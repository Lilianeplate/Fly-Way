// Slider

let count = 1; // Inicializa o contador de slides
document.getElementById("radio1").checked = true; // Seleciona o primeiro slide inicialmente

// Função para avançar para o próximo slide a cada 9 segundos
setInterval(function() {
    nextImage();
}, 9000);

function nextImage() {
    count++; // Incrementa o contador de slides
    if (count > 4) { // Verifica se o contador ultrapassou o número máximo de slides
        count = 1; // Reinicia o contador para o primeiro slide
    }

    // Seleciona o rádio botão correspondente ao próximo slide
    document.getElementById("radio" + count).checked = true;
}





//Destaques

function mostrarDestaques(objetivo, secaoId) {
    const secao = document.getElementById(secaoId);
    secao.innerHTML = '';
  
    const destaquesFiltrados = destaques.filter(destaque => destaque.objetivo.toLowerCase() === objetivo.toLowerCase());
    destaquesFiltrados.forEach(destaque => {
      const novoDestaque = document.createElement('div');
      novoDestaque.classList.add('destaque');
      novoDestaque.innerHTML = `
        <div class="pais_destaque">
          <img src="${destaque.img}" alt="${destaque.local}">
          <a href="#" class="texto">${destaque.local} a partir de R$${destaque.valor}</a>
        </div>
      `;
      secao.appendChild(novoDestaque);
    });
  }
  
  // Chamar a função para cada seção
  mostrarDestaques("Estudo", "estudos_destaques");
  mostrarDestaques("Trabalho", "trabalho_destaques");
  mostrarDestaques("Férias", "ferias_destaques");

