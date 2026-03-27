// js/render-functions.js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.getElementById('gallery');
const loader = document.getElementById('loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

// Функції для рендеру
export function createGallery(images) {
  const markup = images
    .map((image) => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
          <img 
            src="${image.webformatURL}" 
            alt="${image.tags}" 
            class="gallery-image"
            loading="lazy"
          />
        </a>
        <div class="info">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${image.likes.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${image.views.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${image.comments.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${image.downloads.toLocaleString()}</span>
          </div>
        </div>
      </li>
    `)
    .join('');

  galleryContainer.innerHTML = markup;
  lightbox.refresh();   // обов'язково після додавання нових елементів
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

// Loader
export function showLoader() {
  loader.classList.add('show');
}

export function hideLoader() {
  loader.classList.remove('show');
}