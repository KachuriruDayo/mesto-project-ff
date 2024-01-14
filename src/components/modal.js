const popupContainer = document.querySelector('.page__content');
//  Popup большая картинка
const popupBig_picture = document.querySelector('.popup_type_image');
const popupImage = popupBig_picture.querySelector('.popup__image');
const popupCaption = popupBig_picture.querySelector('.popup__caption');

export function openModal (popupElement) {
  popupElement.classList.add('popup_is-animated');
  setTimeout( () => popupElement.classList.add('popup_is-opened'), 1);
  popupElement.querySelector('.popup__close').addEventListener('click', () => closeModal(popupElement));
  document.addEventListener('keydown', closeModal_Escape);
  popupElement.addEventListener('click', closeModal_Overlay);
  popupContainer.append(popupElement);
}

export function closeModal (popupElement) {
popupElement.classList.remove('popup_is-opened');
document.removeEventListener('keydown', closeModal_Escape);
popupElement.removeEventListener('click', closeModal_Overlay);
}

function closeModal_Escape (event) {
  if (event.key ==='Escape') {
    if (document.querySelector('.popup_is-opened')) {
      closeModal(document.querySelector('.popup_is-opened'));
    }
  }
}
function closeModal_Overlay (event) {
  if (event.target.classList.contains('popup_is-opened'))
  closeModal(event.target);
}

export function imageModal (name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openModal(popupBig_picture);
}