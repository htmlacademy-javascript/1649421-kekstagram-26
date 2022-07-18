import { bigPicture } from "./big-picture.js";

const thumbnailsContainer = document.querySelector(".pictures");
const thumbnailTemplate = document.querySelector("#picture").content;
const renderThumbnails = (thumbnails) => {
  const thumbnailsFragment = document.createDocumentFragment();
  thumbnails.forEach((thumbnail) => {
    const newThumbnail = thumbnailTemplate.cloneNode(true);
    newThumbnail.querySelector(".picture__img").src = thumbnail.url;
    newThumbnail.querySelector(".picture__img").alt = thumbnail.description;
    newThumbnail.querySelector(".picture__comments").textContent =
      thumbnail.comments.length;
    newThumbnail.querySelector(".picture__likes").textContent = thumbnail.likes;
    thumbnailsFragment.append(newThumbnail);
    newThumbnail.addEventListener("click", () => {
      console.log("big");
      bigPicture();
    });
  });
  thumbnailsContainer.append(thumbnailsFragment);
  console.log(thumbnails);
};

export { renderThumbnails };
