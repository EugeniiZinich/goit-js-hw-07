import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBoxRef = document.querySelector(".gallery");
galleryBoxRef.addEventListener("click", onImgShow);

function makeGalleryMarckup({ preview, original, description }) {
  return `
     <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="" title="${description}" />
    </a> `;
}

const addPictureElements = galleryItems.map(makeGalleryMarckup).join("");

galleryBoxRef.innerHTML = addPictureElements;

function onImgShow(e) {
  const target = e.target;
  e.preventDefault();

  if (target.nodeName !== "IMG") {
    return;
  }

  var lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
  });
}
