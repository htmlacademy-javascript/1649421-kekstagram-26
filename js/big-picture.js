const bigPictureModal = document.querySelector(".big-picture");
const bigPictureImage = document.querySelector(".big-picture__img img");
const likesBlock = document.querySelector(".likes-count");
const totalComments = document.querySelector(".comments-count");
const commentsList = document.querySelector(".social__comments");
const commentItem = document.querySelector(".social__comment");
const bigPictureModalClose = document.querySelector(".big-picture__cancel");

const showModal = () => {
  bigPictureModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
};

const hideModal = () => {
  bigPictureModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
};

const renderBigImage = (url) => {
  bigPictureImage.src = url;
};

const renderLikes = (likes) => {
  likesBlock.textContent = likes;
};

const renderStatisticComments = (total) => {
  totalComments.textContent = total;
};

const renderComments = (comments) => {
  const newCommentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const newComment = commentItem.cloneNode(true);
    newComment.querySelector(".social__picture").src = comment.avatar;
    newComment.querySelector(".social__picture").alt = comment.name;
    newComment.querySelector(".social__text").textContent = comment.message;
    newCommentsFragment.append(newComment);
  });
  commentsList.append(newCommentsFragment);
};

const clearComments = () => {
  commentsList.innerHTML = "";
};

const renderDescription = (description) => {};

const closeModal = () => {};

const bigPicture = (photo) => {
  showModal();
  renderBigImage(photo.url);
  renderLikes(photo.likes);
  renderStatisticComments(photo.comments.length);
  clearComments();
  renderComments(photo.comments);
  renderDescription(photo.description);
};

const onCloseModalHandler = () => {
  hideModal();
};

bigPictureModalClose.addEventListener("click", onCloseModalHandler);

export { bigPicture };
