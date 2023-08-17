function converterImagem(){
  var receberArquivo = document.getElementById("fotoU").files;
  //console.log(receberArquivo)
  // verificar se a imagem foi pegada
  if(receberArquivo.length > 0){
    //Carregar img
    var carregarImagem = receberArquivo[0];
    //console.log(carregarImagem);
    //permitir ler o conteudo do dispositivo
     var lerArquivo = new FileReader();
  
     lerArquivo.onload = function(arquivoCarregado){
      var imagemBase64 = arquivoCarregado.target.result;
       var fotoP = document.getElementById("fotoP").value = imagemBase64;
      console.log("URL:",fotoP)

      var  img = document.getElementById("imgPrincipal")
      img.src = imagemBase64;
      

     }
     //ler o conteudo
     lerArquivo.readAsDataURL(carregarImagem);
  }
}
//Imagem 1
function converterImagem1(){
  var receberArquivo = document.getElementById("foto1").files;
  //console.log(receberArquivo)
  // verificar se a imagem foi pegada
  if(receberArquivo.length > 0){
    //Carregar img
    var carregarImagem = receberArquivo[0];
    //console.log(carregarImagem);
    //permitir ler o conteudo do dispositivo
     var lerArquivo = new FileReader();
  
     lerArquivo.onload = function(arquivoCarregado){
      var imagemBase64 = arquivoCarregado.target.result;
       var fotoP = document.getElementById("img11").value = imagemBase64;
      console.log("URL:",fotoP)

      var  img = document.getElementById("img1")
      img.src = imagemBase64;
      

     }
     //ler o conteudo
     lerArquivo.readAsDataURL(carregarImagem);
  }
}
//imgagem 2

function converterImagem2(){
  var receberArquivo = document.getElementById("foto2").files;
  //console.log(receberArquivo)
  // verificar se a imagem foi pegada
  if(receberArquivo.length > 0){
    //Carregar img
    var carregarImagem = receberArquivo[0];
    //console.log(carregarImagem);
    //permitir ler o conteudo do dispositivo
     var lerArquivo = new FileReader();
  
     lerArquivo.onload = function(arquivoCarregado){
      var imagemBase64 = arquivoCarregado.target.result;
       var fotoP = document.getElementById("img22").value = imagemBase64;
      console.log("URL:",fotoP)

      var  img = document.getElementById("img2")
      img.src = imagemBase64;
      

     }
     //ler o conteudo
     lerArquivo.readAsDataURL(carregarImagem);
  }
}

//imgagem 3
function converterImagem3(){
  var receberArquivo = document.getElementById("foto3").files;
  //console.log(receberArquivo)
  // verificar se a imagem foi pegada
  if(receberArquivo.length > 0){
    //Carregar img
    var carregarImagem = receberArquivo[0];
    //console.log(carregarImagem);
    //permitir ler o conteudo do dispositivo
     var lerArquivo = new FileReader();
  
     lerArquivo.onload = function(arquivoCarregado){
      var imagemBase64 = arquivoCarregado.target.result;
       var fotoP = document.getElementById("img33").value = imagemBase64;
      console.log("URL:",fotoP)

      var  img = document.getElementById("img3")
      img.src = imagemBase64;
      

     }
     //ler o conteudo
     lerArquivo.readAsDataURL(carregarImagem);
  }
}