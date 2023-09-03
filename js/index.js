// produtos.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCpCFl38gfVWmCQHarvtXECnTRc5TfFtA",
  authDomain: "catalogo-355b9.firebaseapp.com",
  projectId: "catalogo-355b9",
  storageBucket: "catalogo-355b9.appspot.com",
  messagingSenderId: "76937050583",
  appId: "1:76937050583:web:0b287f931eea3144e2b392"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const produtos = document.getElementById("produtos");
let produtosExibidos = 4 ;


// Função para exibir as imagens dos produtos do Firestore
async function exibirImagens() {
  try {
    const produtosRef = collection(db, "produtos");
    const produtosSnapshot = await getDocs(produtosRef);
     produtos.innerHTML="";
     let produtosExibidosAtual = "";

    produtosSnapshot.forEach((doc) => {
      if (produtosExibidosAtual < produtosExibidos){
      const data = doc.data();
      const imgUrl = data.imgP;
      const name = data.nome; 
      const preco = data.precos
      const docId = doc.id;

      // Criar um elemento de imagem e atribuir a URL como a origem (src) da imagem
      const imgElement = document.createElement("img");
      imgElement.src = imgUrl;
      imgElement.classList.add("img");
      const fundo1 = document.createElement("div");
      fundo1.classList.add("fundo1");   
      const titulo = document.createElement("h1");
      titulo.classList.add("nome")
      titulo.innerHTML= name;
      const precos = document.createElement("span");
      precos.classList.add("precos")
      precos.innerHTML=`R$${preco}`
      const vermais = document.createElement("button")
      vermais.classList.add("vermais")
      vermais.innerHTML ="VIEW MORE"
      vermais.addEventListener("click", function () {
        const url = `produto.html?docId=${encodeURIComponent(docId)}&name=${encodeURIComponent(name)}&preco=${encodeURIComponent(preco)}`;
        window.location.href = url;
      });
      const fundo2 =document.createElement("div")
      fundo2.classList.add("fundo2")
      const li = document.createElement("li");
      li.id="lii"
     

  
      fundo1.appendChild(imgElement); 
      fundo1.appendChild(precos)
      fundo1.appendChild(fundo2)
      fundo2.appendChild(titulo)
      fundo2.appendChild(vermais)
      li.appendChild(fundo1);
      produtos.appendChild(li);
      produtosExibidosAtual++;
    }
    });
 // Verifique se ainda há mais produtos para carregar
  if (produtosExibidosAtual < produtosSnapshot.size) {
    const loadMoreButton = document.getElementById("loadMoreButton")
    loadMoreButton.addEventListener("click", () => {
      // Incrementa o número de produtos exibidos quando o botão é clicado
      produtosExibidos += 4;
      exibirImagens();
    });
  }
} catch (error) {
  console.error("Erro ao obter dados do Firestore:", error);
}
}


// Chamar a função para exibir as imagens quando a página carregar
window.addEventListener("load",() =>{
  exibirImagens();
});

