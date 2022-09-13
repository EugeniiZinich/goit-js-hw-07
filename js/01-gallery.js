import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBoxRef = document.querySelector(".gallery");
galleryBoxRef.addEventListener("click", onImgShow);

function makeGalleryMarckup({ preview, original, description }) {
  return `
     <div class="gallery__item">
        <a class="gallery__link" data- href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            target="_self "
            />
        </a>
    </div>
  `;
}

const addPictureElements = galleryItems.map(makeGalleryMarckup).join("");

galleryBoxRef.innerHTML = addPictureElements;

function onImgShow(e) {
  const target = e.target;
  e.preventDefault();

  if (target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${e.target.dataset.source}" width="800" height="600">`);
  instance.show();

  galleryBoxRef.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
