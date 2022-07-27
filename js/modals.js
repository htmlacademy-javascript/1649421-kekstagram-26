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

const addSuccessMessageHandlers = (successMessageElement) => {
  const successButtonElement =
    successMessageElement.querySelector('.success__button');
  successButtonElement.addEventListener('click', () => {
    successMessageElement.remove();
    document.removeEventListener('keydown', escKeydownOnSuccessMessageHandler);
  });
  document.addEventListener('keydown', escKeydownOnSuccessMessageHandler);
};

const ErrorMessage = () => {
  const documentFragment = document.createDocumentFragment();
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  errorMessageElement.style.zIndex = '5';
  documentFragment.append(errorMessageElement);
  document.body.append(documentFragment);
  addErrorMessageHandlers(errorMessageElement);
};

const addErrorMessageHandlers = (errorMessageElement) => {
  const errorButtonElement =
    errorMessageElement.querySelector('.error__button');
  errorButtonElement.addEventListener('click', () => {
    errorMessageElement.remove();
    document.removeEventListener('keydown', escKeydownOnErrorMessageHandler);
  });
  document.addEventListener('keydown', escKeydownOnErrorMessageHandler);
};

function escKeydownOnSuccessMessageHandler(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    removeSuccessMessage();
  }
}

function escKeydownOnErrorMessageHandler(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    removeErrorMessage();
  }
}

export { SuccessMessage, ErrorMessage };
