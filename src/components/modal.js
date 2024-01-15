/** функция открытия модального окна */
export function openModal (popupElement) {
  popupElement.classList.add('popup_is-opened'); 
  popupElement.querySelector('.popup__close').addEventListener('click', () => closeModal(popupElement));
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
  const openedPopup = document.querySelector('.popup_is-opened');
  if (event.key ==='Escape') {
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}