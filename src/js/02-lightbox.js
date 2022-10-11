import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')
const itemRef = createGalleryItems(galleryItems);
console.log(itemRef)
function createGalleryItems (items){
    return items.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
      </a>`
    }).join(""); 
        
}

galleryRef.insertAdjacentHTML('beforeend', itemRef);


galleryRef.addEventListener('click', onClickItemImg)

function onClickItemImg(evt){
    evt.preventDefault();
    if(!evt.target.classList.contains('gallery__image')){
        return;
    }
    

    
    
}


let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });













