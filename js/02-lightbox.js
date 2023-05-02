import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imagesList = document.querySelector('.gallery');

const imagesListItems = galleryItems.map(item =>
    `<li class="gallery__item"> 
        <a class="gallery__link" href="${item.original}"> 
            <img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a></li>`)
    .join("");


imagesList.innerHTML = imagesListItems;

var lightbox = new SimpleLightbox('.gallery li a', { 
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

