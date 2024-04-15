var modalWrapper = document.getElementById('modalWrapper');
var modalContent = document.getElementById('modalContent');
var openModalButton = document.getElementById('openModalButton');
var closeModalButton = document.getElementById('closeModalButton');

function openModal() {
  modalWrapper.style.opacity = '1';
  modalWrapper.style.visibility = 'visible';
  modalContent.classList.add('active');
}

function closeModal() {
  modalWrapper.style.opacity = '0';
  modalWrapper.style.visibility = 'hidden';
  modalContent.classList.remove('active');
}

openModalButton.addEventListener('click', openModal);

closeModalButton.addEventListener('click', closeModal);

window.addEventListener('click', function (event) {
  if (event.target === modalWrapper) {
    closeModal();
  }
});
