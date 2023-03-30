import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((el) => {
	galleryEl.innerHTML += `<li class="gallery__item" >
 <a class="gallery__link" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" title="${el.description}"   />
</a>
</li>
`;
});

galleryEl.addEventListener("click", (e) => {
	e.preventDefault();
});
var lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
