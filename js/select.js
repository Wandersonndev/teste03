
document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("menu");
  select.addEventListener("change", function () {
    //Search
    if (select.value === "home") {
     
      document.getElementById("produtosPrincipais").classList.remove("produtosPrincipais");
      document.getElementById("sectionprodutosSearch").classList.add("sectionprodutosSearch");
  
      
    }else{
      if(select.value === "search"){
        document.getElementById("produtosPrincipais").classList.add("produtosPrincipais");
        document.getElementById("sectionprodutosSearch").classList.remove("sectionprodutosSearch");
      }
    }
  })



})