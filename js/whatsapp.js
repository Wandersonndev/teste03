// script.js
document.addEventListener('DOMContentLoaded', function () {
  const whatsappButton = document.getElementById('whatsapp-button');

  whatsappButton.addEventListener('click', function () {
    const phoneNumber = '+5538998365533'; // Substitua pelo número de telefone
    const message = 'Olá, quero falar sobre...'; // Sua mensagem pré-definida

    // Construa o URL do WhatsApp com o número de telefone e a mensagem
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Abre uma nova guia com o URL do WhatsApp
    window.open(whatsappURL, '_blank');
  });
});
