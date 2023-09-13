function searchFunction() {
  var input, filter, ul, li, h1, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById('produtosSearch'); // Substitua 'produtos' pelo ID correto da sua lista ul
  li = ul.getElementsByClassName('liiSearch'); // Substitua 'liiSearch' pela classe correta

  for (var i = 0; i < li.length; i++) {
    h1 = li[i].getElementsByClassName('nomeSearch')[0];
    if (h1) { // Verifica se há elementos <h1>
      txtValue = h1.textContent || h1.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }
}
window.addEventListener("load",() =>{
  searchFunction()
});
