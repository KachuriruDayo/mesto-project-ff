/** Импортируемые элементы */
import './pages/index.css';
import {createCard, submitDeleteCard, likeImg} from "./components/card.js";
import {openModal, closeModal} from './components/modal.js';
import {enableValidation, resetValidation} from './components/validation.js';
import { getInitialCards, getUserData, patchUserData, patchUserAvatar, postNewCard} from './components/api.js';
import {handleSubmit} from './components/utils.js';

/** DOM узлы */
const cardContainer = document.querySelector('.places__list');

/** Конфиг валидации */
const validationConfig = {
  fieldsetSelector: ".form__set",
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
}

/** общие константы */
let user;
let markedCard = {};

/** Popup редактирования профиля */
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit');
const profileForm = document.forms.edit_profile;
const nameInput = profileForm.elements.name;
const jobInput = profileForm.elements.description;
/** Данные профиля */
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__image')

/** Popup обновления аватара */
const popupAvatarEdit = document.querySelector('.popup_type_edit-avatar');
const editAvatarButton = document.querySelector('.profile__avatar-button');
const avatarForm = document.forms.new_avatar;
const avatarLinkInput = avatarForm.elements.avatar_link;

/**  Popup удаление карточки */
const popupCardDelete = document.querySelector('.popup_type_delete-card');
const сardDeleteForm = document.forms.delete_card;

/** Popup добавления новой карточки */
const popupNewСard = document.querySelector('.popup_type_new-card');
const addButton = document.querySelector('.profile__add-button');
const addCardForm = document.forms.new_place;
const namePlaceInput = addCardForm.elements.place_name;
const linkInput = addCardForm.elements.link;

/** Popup большая картинка */
const popupBigPicture = document.querySelector('.popup_type_image');
const popupImage = popupBigPicture.querySelector('.popup__image');
const popupCaption = popupBigPicture.querySelector('.popup__caption');

/** Вывод fetch запросов */
Promise.all([getInitialCards(), getUserData()])
  .then(([cardList, userData]) => {
    user = userData;
    cardList.forEach(cardData => cardContainer.append(createCard(cardData, userData, openDeleteCardPopup, likeImg, openImageModal)));
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
  });

/** вызов валидации */
enableValidation(validationConfig);

/** Функция открытия карточки */ 
const openImageModal = (cardData) => {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openModal(popupBigPicture);
}

/** функция открытия окна редактирования профиля */
const openEditProfilePopup = (popup) => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popup);
}

/** Обработчик «отправки» формы редактирования профиля */
const handleEditProfileSubmit= (evt) => {
  function makeRequest() {
    return patchUserData(nameInput.value, jobInput.value).then((userData) => {
      profileTitle.textContent = userData.name;
      profileDescription.textContent = userData.about;
    });
  }
  handleSubmit(makeRequest, evt, popupProfile, closeModal, validationConfig, resetValidation);
}

/** Обработчик «отправки» формы обновления аватара профиля */
const handleEditAvatarSubmit= (evt) => {
  function makeRequest() {
    return patchUserAvatar(avatarLinkInput.value).then((data) => {
      profileAvatar.style.backgroundImage = `url(${data.avatar})`;
    });
  }
  handleSubmit(makeRequest, evt, popupAvatarEdit, closeModal, validationConfig, resetValidation);
}

/** Обработчик «отправки» формы добавления новой карточки */
const handleAddNewCard= (evt) => {
  function makeRequest() {
    return postNewCard(namePlaceInput.value, linkInput.value).then((cardData) => {
      cardContainer.prepend(createCard(cardData, user, openDeleteCardPopup, likeImg, openImageModal));
    });
  }
  handleSubmit(makeRequest, evt, popupNewСard, closeModal, validationConfig, resetValidation);
}

/** функция открытия popup удаления карточки */
const openDeleteCardPopup = (card, cardData) => {
  markedCard.card = card;
  markedCard.cardId = cardData
  openModal(popupCardDelete);
}

/** слушатели окна редактирования */
editButton.addEventListener('click', () => openEditProfilePopup(popupProfile));
profileForm.addEventListener('submit', handleEditProfileSubmit);

/** слушатели окна обновления аватара */
editAvatarButton.addEventListener('click', () => openModal(popupAvatarEdit));
avatarForm.addEventListener('submit', handleEditAvatarSubmit);

/** слушатели окна добавления карточки */
addButton.addEventListener('click', () => openModal(popupNewСard));
addCardForm.addEventListener('submit', handleAddNewCard);

/** Слушатель субмита окна удаления карточки */
сardDeleteForm.addEventListener('submit', () => {
  submitDeleteCard(markedCard.card, markedCard.cardId);
  closeModal(popupCardDelete);
});
