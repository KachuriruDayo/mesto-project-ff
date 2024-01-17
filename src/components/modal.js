/** функция открытия модального окна */
export function openModal (popupElement) {
  popupElement.classList.add('popup_is-opened'); 
  document.addEventListener('keydown', closeModalEscape);
}

/** функция закрытия модального окна */
export function closeModal (popupElement) {
  popupElement.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalEscape);
}

/** функция закрытия модального окна через ESC */
function closeModalEscape (event) {
  if (event.key ==='Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

/** функия закрытия окна по клику на оверлей */ 
export function closeModalOverlay (event) {
  if (event.target.classList.contains('popup_is-opened'))
  closeModal(event.target);
}
