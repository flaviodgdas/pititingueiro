document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
});
// Exemplo: você pode adicionar lógica para mostrar o botão após alguns segundos
setTimeout(() => {
  document.getElementById('whatsappBtn').style.display = 'flex';
}, 1000);

