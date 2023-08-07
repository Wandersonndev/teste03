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

// Função para exibir as imagens dos produtos do Firestore
async function exibirImagens() {
  try {
    const produtosRef = collection(db, "produtos");
    const produtosSnapshot = await getDocs(produtosRef);

    produtosSnapshot.forEach((doc) => {
      const data = doc.data();
      const imgUrl = data.imgP;
      const name = data.nome; 

      // Criar um elemento de imagem e atribuir a URL como a origem (src) da imagem
      const imgElement = document.createElement("img");
      imgElement.src = imgUrl;
      imgElement.classList.add("img");

      const fundo1 = document.createElement("div");
      fundo1.classList.add("fundo1");   
      const titulo = document.createElement("h1");
      titulo.classList.add("nome")
      titulo.innerHTML= name;
      const linha  = document.createElement("div");
      linha.classList.add("linha");
      const li = document.createElement("li");
     

  
      fundo1.appendChild(imgElement);
      fundo1.appendChild(titulo)
      fundo1.appendChild(linha)
      li.appendChild(fundo1);
      produtos.appendChild(li);
    });
  } catch (error) {
    console.error("Erro ao obter dados do Firestore:", error);
  }
}

// Chamar a função para exibir as imagens quando a página carregar
window.addEventListener("load", exibirImagens);

