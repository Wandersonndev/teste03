document.addEventListener("DOMContentLoaded", function () {
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active"); // Remove a classe active de todas as imagens
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("active"); // Adiciona a classe active à imagem atual

    setTimeout(showSlides, 10000); // Troca de slide a cada 2 segundos
  }
});
