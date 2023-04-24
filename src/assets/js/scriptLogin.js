// função para atualizar a imagem de acordo com a largura da tela
function updateLogo() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    document.getElementById("logoNoJS").src = "/src/assets/img/logoPortal.png";
  } else {
    document.getElementById("logoNoJS").src =
      "/src/assets/img/logoPortalWhite.png";
  }
}

// atualiza a imagem na primeira carga da página
updateLogo();

// adiciona o evento de redimensionamento para atualizar a imagem
window.addEventListener("resize", updateLogo);
