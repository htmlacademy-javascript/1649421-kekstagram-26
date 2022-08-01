import { escapeKeydownHandler } from './form.js';

const successMessageTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorMessageTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const renderSuccessMessage = () => {
  const documentFragment = document.createDocumentFragment();
  const successMessageElement = successMessageTemplate.cloneNode(true);
  documentFragment.append(successMessageElement);
  document.body.append(documentFragment);
  addSuccessMessageHandlers(successMessageElement);
  const successMessageEscapeHandler = messageEscapeHandler(
    successMessageElement
  );
  document.addEventListener('keydown', successMessageEscapeHandler);
  const successMessageOutsideClickHandler = messageOutsideClickHandler(
    successMessageElement
  );
  successMessageElement.addEventListener(
    'click',
    successMessageOutsideClickHandler
  );
};

function addSuccessMessageHandlers(successMessageElement) {
  const successButtonElement =
    successMessageElement.querySelector('.success__button');
  successButtonElement.addEventListener('click', () => {
    successMessageElement.remove();
  });
}

const renderErrorMessage = () => {
  const documentFragment = document.createDocumentFragment();
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  errorMessageElement.style.zIndex = '5';
  documentFragment.append(errorMessageElement);
  document.body.append(documentFragment);
  addErrorMessageHandlers(errorMessageElement);
  const errorMessageEscapeHandler = messageEscapeHandler(errorMessageElement);
  document.addEventListener('keydown', errorMessageEscapeHandler);
  const errorMessageOutsideClickHandler = messageOutsideClickHandler(
    errorMessageElement,
    'error'
  );
  errorMessageElement.addEventListener(
    'click',
    errorMessageOutsideClickHandler
  );
};

function addErrorMessageHandlers(errorMessageElement) {
  const errorButtonElement =
    errorMessageElement.querySelector('.error__button');
  errorButtonElement.addEventListener('click', () => {
    errorMessageElement.remove();
  });
}

function messageEscapeHandler(messageElement) {
  return (evt) => {
    if (evt.key === 'Escape') {
      messageElement.remove();
    }
  };
}

function messageOutsideClickHandler(messageElement, error) {
  return (evt) => {
    if (evt.target === evt.currentTarget) {
      messageElement.remove();
      if (error) {
        document.addEventListener('keydown', escapeKeydownHandler);
      }
    }
  };
}

export { renderSuccessMessage, renderErrorMessage };
