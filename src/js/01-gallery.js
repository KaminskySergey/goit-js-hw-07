import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector('.gallery')
const itemMarcupRef = createMapkupItems(galleryItems);
const itemRef = document.querySelector('.gallery__image');
console.log(itemRef)

galleryContainerRef.insertAdjacentHTML('beforeend', itemMarcupRef)


galleryContainerRef.addEventListener('click', onClickImg)



function createMapkupItems (items){
    return  items.map(({preview, original, description}) =>{
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        </div>
        `
        
    })
    .join("");
    


}

function onClickImg (evt){
  evt.preventDefault()
  window.addEventListener('keydown', onCloseEscape)
    if(!evt.target.classList.contains('gallery__image')){
      return;
    }
    console.log(evt.target);
   

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
    instance.show()


    function onCloseEscape(evt){
      console.log(evt.code)
    if(evt.code === "Escape"){
      instance.close()
    }
    }
  }

