/** Установка слушателей на закрытие попапов по кнопке и через оверлей */
const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_is-opened')) {
        closeModal(evt.target)
      }
      if (evt.target.classList.contains('popup__close')) {
        closeModal(popup)
      }
  })
})

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