import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((el) => {
	galleryEl.innerHTML += `<div class="gallery__item" >
  <a class="gallery__link" href="${el.original}" >
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`;
});

galleryEl.addEventListener("click", (e) => {
	e.preventDefault();
	if (e.target.tagName !== "IMG") {
		return;
	}
	const instance = basicLightbox.create(`<img src=${e.target.dataset.source}>`);
	instance.show();
	document.addEventListener("keydown", (e) => {
		if (e.code === "Escape") {
			instance.close();
		}
	});
});
