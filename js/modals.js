const successMessageTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorMessageTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const SuccessMessage = () => {
  const documentFragment = document.createDocumentFragment();
  const successMessageElement = successMessageTemplate.cloneNode(true);
  documentFragment.append(successMessageElement);
  document.body.append(documentFragment);
  addSuccessMessageHandlers(successMessageElement);
};

function addSuccessMessageHandlers(successMessageElement) {
  const successButtonElement =
    successMessageElement.querySelector('.success__button');
  successButtonElement.addEventListener('click', () => {
    successMessageElement.remove();
  });
}

const ErrorMessage = () => {
  const documentFragment = document.createDocumentFragment();
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  errorMessageElement.style.zIndex = '5';
  documentFragment.append(errorMessageElement);
  document.body.append(documentFragment);
  addErrorMessageHandlers(errorMessageElement);
};

function addErrorMessageHandlers(errorMessageElement) {
  const errorButtonElement =
    errorMessageElement.querySelector('.error__button');
  errorButtonElement.addEventListener('click', () => {
    errorMessageElement.remove();
  });
}

export { SuccessMessage, ErrorMessage };
