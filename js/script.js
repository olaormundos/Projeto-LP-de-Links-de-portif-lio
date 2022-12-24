function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a Tag imagem
  const img = document.querySelector("#profile img")
  // Substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute("alt", "Foto Vanderlei Desenvolvedor sorrindo")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto Vanderlei Desenvolvedor")
  }
}
