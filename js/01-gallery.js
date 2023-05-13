import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imagesList = document.querySelector('.gallery');

const imagesListItems = galleryItems.map(item =>
    `<li class="gallery__item"> 
        <a class="gallery__link" href="${item.original}"> 
            <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></li>`)
    .join("");


imagesList.innerHTML = imagesListItems;


imagesList.addEventListener("click", onImageClick);

function onImageClick (event) {
    event.preventDefault();

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
            onShow: (instance) => {
                window.addEventListener("keydown", event);
                console.log('onShow', instance);
            },
            onClose: (instance) => {
                window.removeEventListener("keydown", event);
                console.log('onClose', instance);
            }
        }
    );

    if (event.target.classList.value === "gallery__image") {
        const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
        instance.show()

        window.addEventListener("keydown", (event) => {
            if(instance.visible() === true){
                if(event.key === "Escape"){
                    instance.close();
                }
            }
        })

    };
};


