import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

const gallerySort = galleryItems => {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>
        </li>`
    }).join('');
};
const gallery = document.querySelector('.gallery');
gallery.innerHTML = gallerySort(galleryItems);

new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'})
