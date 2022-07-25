import { commentsModel } from './comments-model.js';

const bigPictureModal = document.querySelector('.big-picture');
const bigPictureImage = document.querySelector('.big-picture__img img');
const likesBlock = document.querySelector('.likes-count');
const totalComments = document.querySelector('.social__comment-count');
const commentsList = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');
const bigPictureModalClose = document.querySelector('.big-picture__cancel');
const loadButton = document.querySelector('.comments-loader');

const showModal = () => {
  bigPictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideModal = () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const renderBigImage = (url) => {
  bigPictureImage.src = url;
};

const renderLikes = (likes) => {
  likesBlock.textContent = likes;
};

const renderStatisticComments = (showed, total) => {
  totalComments.textContent = `${showed} из ${total} комментариев`;
};

const renderComments = (comments) => {
  const newCommentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const newComment = commentItem.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__picture').alt = comment.name;
    newComment.querySelector('.social__text').textContent = comment.message;
    newCommentsFragment.append(newComment);
  });
  commentsList.append(newCommentsFragment);
};

const clearComments = () => {
  commentsList.innerHTML = '';
};

const renderDescription = (description) => {};

const closeModal = () => {};

const showLoadButton = () => {
  loadButton.classList.remove('hidden');
};

const hideLoadButton = () => {
  loadButton.classList.add('hidden');
};

const renderLoadButton = (showed, total) => {
  if (showed < total) {
    showLoadButton();
  } else {
    hideLoadButton();
  }
};

const loadButtonHandler = () => {
  commentsModel.setNextDose();
  renderStatisticComments(
    commentsModel.getCurrentNumber(),
    commentsModel.getTotalNumber()
  );
  renderComments(commentsModel.getDoseShowedComments());
  renderLoadButton(
    commentsModel.getCurrentNumber(),
    commentsModel.getTotalNumber()
  );
};

const escapeKeydownHandler = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideModal();
  }
};

const bigPicture = (photo) => {
  commentsModel.setStartModel(photo.comments);
  console.log(commentsModel.getModel());
  showModal();
  renderBigImage(photo.url);
  renderLikes(photo.likes);
  renderStatisticComments(
    commentsModel.getCurrentNumber(),
    commentsModel.getTotalNumber()
  );
  clearComments();
  renderComments(commentsModel.getDoseShowedComments());
  renderDescription(photo.description);
  renderLoadButton(
    commentsModel.getCurrentNumber(),
    commentsModel.getTotalNumber()
  );
  loadButton.addEventListener('click', loadButtonHandler);
  document.addEventListener('keydown', escapeKeydownHandler);
};

const onCloseModalHandler = () => {
  hideModal();
  loadButton.removeEventListener('click', loadButtonHandler);
  document.removeEventListener('keydown', escapeKeydownHandler);
};

bigPictureModalClose.addEventListener('click', onCloseModalHandler);

export { bigPicture };
