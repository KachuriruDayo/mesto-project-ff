/** Импортируемые элементы */
import './pages/index.css';
import {createCard, submitDeleteCard, likeImg} from "./components/card.js";
import {openModal, closeModal, closeModalOverlay} from './components/modal.js';
import {enableValidation, resetValidation} from './components/validation.js';
import { getInitialCards, getUserData, patchUserData, patchUserAvatar, postNewCard} from './components/api.js';

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

/** Popup редактирования профиля */
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit');
const popupProfileClose = popupProfile.querySelector('.popup__close');
const popupProfileSubmit = popupProfile.querySelector('.popup__button');
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
const popupAvatarClose = popupAvatarEdit.querySelector('.popup__close');
const popupAvatarSubmit = popupAvatarEdit.querySelector('.popup__button');
const avatarForm = document.forms.new_avatar;
const avatarLinkInput = avatarForm.elements.avatar_link;

/**  Popup удаление карточки */
const popupCardDelete = document.querySelector('.popup_type_delete-card');
const popupCardDeleteClose = popupCardDelete.querySelector('.popup__close');
const сardDeleteForm = document.forms.delete_card;

/** Popup добавления новой карточки */
const popupNewСard = document.querySelector('.popup_type_new-card');
const addButton = document.querySelector('.profile__add-button');
const popupNewСardClose = popupNewСard.querySelector('.popup__close');
const popupNewСardSubmit = popupNewСard.querySelector('.popup__button');
const addCardForm = document.forms.new_place;
const namePlaceInput = addCardForm.elements.place_name;
const linkInput = addCardForm.elements.link;

/** Popup большая картинка */
const popupBigPicture = document.querySelector('.popup_type_image');
const popupImage = popupBigPicture.querySelector('.popup__image');
const popupCaption = popupBigPicture.querySelector('.popup__caption');
const popupBigPictureClose = popupBigPicture.querySelector('.popup__close');

/** Вывод fetch запросов */
Promise.all([getInitialCards(), getUserData()])
  .then(([cardList, userData]) => {
    console.log(cardList, userData);
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
const handleEditProfileSubmit = (evt) => {
  evt.preventDefault();
  /** Получите значение полей jobInput и nameInput из свойства value */
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  /** отправка данных на сервер */
  patchUserData(nameValue, jobValue)
  /** Вставьте новые значения с помощью textContent */
  .then((data) => {
    popupProfileSubmit.textContent = 'Сохранение...';
    profileTitle.textContent = data.name;
    profileDescription.textContent = data.about;
      /** Сброс полей */
    profileForm.reset();
    closeModal(popupProfile);
  });
}

/** Обработчик «отправки» формы обновления аватара профиля */
const handleEditAvatarSubmit = (evt) => {
  evt.preventDefault();
  /** Получите значение поля avatarLinkInput из свойства value */
  const avatarLink = avatarLinkInput.value;
  patchUserAvatar(avatarLink)
  /** Вставьте новые значения */
  .then ((data) => {
    popupAvatarSubmit.textContent = 'Сохранение...';
    profileAvatar.style.backgroundImage = `url(${data.avatar})`;
    /** Сброс полей */
    avatarForm.reset();
    closeModal(popupAvatarEdit);
  });
}

/** функция открытия окна добавления новой карточки */
const  openNewCardPopup = (popup) => {
  namePlaceInput.value = '';
  linkInput.value = '';
  openModal(popup);
}

/** Обработчик «отправки» формы добавления новой карточки */
const handleAddNewCard = (evt) => {
  evt.preventDefault();
  /** Получите значение полей jobInput и nameInput из свойства value */
  const namePlaceValue = namePlaceInput.value;
  const linkValue = linkInput.value;
  Promise.all([postNewCard(namePlaceValue, linkValue), getUserData()])
  /** получение обьекта с параметрами карточки */
  .then (([cardData, userData]) => {
    popupNewСardSubmit.textContent = 'Сохранение...';
    /** Выберите элементы, куда должны быть вставлены значения полей */
    cardContainer.prepend(createCard(cardData, userData, openDeleteCardPopup, likeImg, openImageModal));
      /** Сброс полей */
    addCardForm.reset();
    closeModal(popupNewСard);
  });
}

/** функция открытия popup удаления карточки */
const openDeleteCardPopup = (card, cardData) => {
  openModal(popupCardDelete);
  сardDeleteForm.addEventListener('submit', function () {
    submitDeleteCard(card, cardData);
    closeModal(popupCardDelete);
  });
}

/** слушатели окна редактирования */
editButton.addEventListener('click', function () {
  resetValidation(popupProfile, validationConfig);
  openEditProfilePopup(popupProfile);
});
profileForm.addEventListener('submit', handleEditProfileSubmit);
popupProfileClose.addEventListener('click', () => closeModal(popupProfile));
popupProfile.addEventListener('click', closeModalOverlay);

/** слушатели окна обновления аватара */
editAvatarButton.addEventListener('click', function () {
  resetValidation(popupAvatarEdit, validationConfig);
  openModal(popupAvatarEdit);
});
avatarForm.addEventListener('submit', handleEditAvatarSubmit);
popupAvatarClose.addEventListener('click', () => closeModal(popupAvatarEdit));
popupAvatarEdit.addEventListener('click', closeModalOverlay);

/** слушатели окна добавления карточки */
addButton.addEventListener('click', function () {
  resetValidation(popupNewСard, validationConfig);
  openNewCardPopup(popupNewСard);
});
addCardForm.addEventListener('submit', handleAddNewCard);
popupNewСard.addEventListener('click', closeModalOverlay);
popupNewСardClose.addEventListener('click', () => closeModal(popupNewСard));

/** Слушатели модального окна открытой картинки  */
popupBigPicture.addEventListener('click', closeModalOverlay);
popupBigPictureClose.addEventListener('click', () => closeModal(popupBigPicture));

/** Слушатели окна удаления карточки */
popupCardDelete.addEventListener('click', closeModalOverlay);
popupCardDeleteClose.addEventListener('click', () => closeModal(popupCardDelete));