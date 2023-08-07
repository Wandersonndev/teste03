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

      // Criar um elemento de imagem e atribuir a URL como a origem (src) da imagem
      const imgElement = document.createElement("img");
      imgElement.src = imgUrl;
      imgElement.classList.add("img");

      const fimg = document.createElement("div");
      fimg.classList.add("fimg");
      fimg.appendChild(imgElement);

      const li = document.createElement("li");
      li.appendChild(fimg);

      produtos.appendChild(li);
    });
  } catch (error) {
    console.error("Erro ao obter dados do Firestore:", error);
  }
}

// Chamar a função para exibir as imagens quando a página carregar
window.addEventListener("load", exibirImagens);

