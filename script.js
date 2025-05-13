function abrirModal(img) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modalImg.src = img.src;
  modal.style.display = 'flex';
}
function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}
