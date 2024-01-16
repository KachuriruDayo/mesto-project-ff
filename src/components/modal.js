/** функция открытия модального окна */
export function openModal (popupElement) {
  popupElement.classList.add('popup_is-opened'); 
  document.addEventListener('keydown', closeModalEscape);
}

/** функция закрытия модального окна */
export function closeModal (popupElement) {
  popupElement.classList.remove('popup_is-opened');
  popupElement.querySelector('.popup__close').removeEventListener('click', () => closeModal(popupElement));
  document.removeEventListener('keydown', closeModalEscape);
}

/** функция закрытия модального окна через ESC */
function closeModalEscape (event) {
  if (event.key ==='Escape') {
    if (document.querySelector('.popup_is-opened')) {
      closeModal(document.querySelector('.popup_is-opened'));
    }
  }
}

/** функия закрытия окна по клику на оверлей */ 
export function closeModalOverlay (event) {
  if (event.target.classList.contains('popup_is-opened'))
  closeModal(event.target);
}
