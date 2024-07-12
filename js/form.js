

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const uploadLogo = document.querySelector('#upload-file');
const hashtag = document.querySelector('.text__hastags');
const comment = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper',
});

const fileInputChange = () => {
  showModalWindow();
};

const showModalWindow = () => {
  uploadFile.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onKeydown);
};

const closeModalWindow = () => {
  ploadFile.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onKeydown);
};

const onKeydown = () => {

}

const cancelButton = () => {
  closeModalWindow;
}

uploadLogo.addEventListener('change', fileInputChange);
uploadCancel.addEventListener('click', cancelButton);
