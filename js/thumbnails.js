const thumbnailsContainer = document.querySelector(".pictures");
const thumbnailTemplate = document.querySelector("#picture").content;
const renderThumbnails = (thumbnails) => {
  thumbnails.forEach((thumbnail) => {
    const newThumbnail = thumbnailTemplate.cloneNode(true);
    newThumbnail.querySelector(".picture__img").src = thumbnail.url;
    newThumbnail.querySelector(".picture__img").alt = thumbnail.description;
    newThumbnail.querySelector(".picture__comments").textContent =
      thumbnail.comments.length;
    newThumbnail.querySelector(".picture__likes").textContent = thumbnail.likes;
    thumbnailsContainer.append(newThumbnail);
  });
  console.log(thumbnails);
};

export { renderThumbnails };
