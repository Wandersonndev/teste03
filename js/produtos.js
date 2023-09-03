let productData = {
  imgUrl: "",
  name: "",
  preco: ""
};

// ...

vermais.addEventListener("click", function () {
  // Armazene os dados do produto nas variáveis globais
  productData.imgUrl = imgUrl;
  productData.name = name;
  productData.preco = preco;

  // Redirecione para a próxima página (produto.html)
  window.location.href = "produto.html";
});
