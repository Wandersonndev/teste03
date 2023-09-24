// produto.html
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCpCFl38gfVWmCQHarvtXECnTRc5TfFtA",
  authDomain: "catalogo-355b9.firebaseapp.com",
  projectId: "catalogo-355b9",
  storageBucket: "catalogo-355b9.appspot.com",
  messagingSenderId: "76937050583",
  appId: "1:76937050583:web:0b287f931eea3144e2b392"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para obter os detalhes do produto com base no ID
async function obterDetalhesDoProduto() {
  try {
    // Obtenha o ID do produto dos parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const docId = urlParams.get("docId");

    // Consulte o Firestore para obter os detalhes do produto com base no ID
    const produtoRef = doc(db, "produtos", docId);
    const produtoSnapshot = await getDoc(produtoRef);

    if (produtoSnapshot.exists()) {
      // Produto encontrado, recupere os dados
      const data = produtoSnapshot.data();
      const imgUrl = data.imgP;
      const ImgUrl1 = data.img1;
      const ImgUrl2 = data.img2;
      const ImgUrl3 = data.img3
      const name = data.nome;
      const preco = data.precos;

      const imagenCatalogo0 = document.getElementById("imagenCatalogo0")
      const imagenCatalogo1 = document.getElementById("imagenCatalogo1")
      const imagenCatalogo2 = document.getElementById("imagenCatalogo2")
      const imagenCatalogo3 = document.getElementById("imagenCatalogo3")
      const name1 = document.getElementById("name");
      const preco1 = document.getElementById("preco");
      imagenCatalogo0.src = imgUrl;
      imagenCatalogo1.src = ImgUrl1;
      imagenCatalogo2.src = ImgUrl2;
      imagenCatalogo3.src = ImgUrl3;
      name1.innerHTML = name;
      preco1.innerHTML = `R$ ${preco}`;
      document.getElementById("spinner").classList.remove("spinner");
    } else {
      console.log("Produto não encontrado");
    }
  } catch (error) {
    console.error("Erro ao obter detalhes do produto:", error);
  }
}

// Chame a função para obter os detalhes do produto quando a página carregar
window.addEventListener("load", () => {
  obterDetalhesDoProduto();
});
