/** функция открытия модального окна */
export const openModal = (popupElement) => {
  popupElement.classList.add('popup_is-opened'); 
  document.addEventListener('keydown', closeModalEscape);
}

/** функция закрытия модального окна */
export const closeModal = (popupElement) => {
  popupElement.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalEscape);
}

/** функция закрытия модального окна через ESC */
const closeModalEscape = (event) => {
  if (event.key ==='Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

/** функия закрытия окна по клику на оверлей */ 
export const closeModalOverlay = (event) => {
  if (event.target.classList.contains('popup_is-opened'))
  closeModal(event.target);
}
