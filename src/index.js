/** Импортируемые элементы */
import './pages/index.css';
import {initialCards} from "./components/cardsContent.js";
import {createCard, deleteCard, likeImg} from "./components/card.js";
import {openModal, closeModal, closeModalOverlay} from './components/modal.js';

/** DOM узлы */
const cardContainer = document.querySelector('.places__list');

/** Вывести карточки на страницу */
initialCards.forEach(cardData => cardContainer.append(createCard(cardData, deleteCard, likeImg, openImageModal)));

/** Popup редактирования профиля */
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit');
const popupProfileClose = popupProfile.querySelector('.popup__close');
const profileForm = document.forms.edit_profile;
const nameInput = profileForm.elements.name;
const jobInput = profileForm.elements.description;
/** Данные профиля */
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

/** Popup добавления новой карточки */
const popupNewСard = document.querySelector('.popup_type_new-card');
const addButton = document.querySelector('.profile__add-button');
const popupNewСardClose = popupNewСard.querySelector('.popup__close');
const addCardForm = document.forms.new_place;
const namePlaceInput = addCardForm.elements.place_name;
const linkInput = addCardForm.elements.link;

/** Popup большая картинка */
const popupBigPicture = document.querySelector('.popup_type_image');
const popupImage = popupBigPicture.querySelector('.popup__image');
const popupCaption = popupBigPicture.querySelector('.popup__caption');
const popupBigPictureClose = popupBigPicture.querySelector('.popup__close');

/** Функция открытия карточки */ 
function openImageModal (cardData) {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openModal(popupBigPicture);
}

/** функция открытия окна редактирования профиля */
function openEditProfilePopup (popup) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popup);
};

/** Обработчик «отправки» формы редактирования профиля */
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  /** Получите значение полей jobInput и nameInput из свойства value */
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  /** Вставьте новые значения с помощью textContent */
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  /** Сброс полей */
  profileForm.reset();
  closeModal(popupProfile);
}

/** Обработчик «отправки» формы добавления новой карточки */
function handleAddNewCard(evt) {
  evt.preventDefault();
  /** Получите значение полей jobInput и nameInput из свойства value */
  const namePlaceValue = namePlaceInput.value;
  const linkValue = linkInput.value;
  /** создание обьекта с параметрами карточки */
  const newCardObj = [];
  newCardObj['name'] = namePlaceValue;
  newCardObj['link'] = linkValue;
  /** Выберите элементы, куда должны быть вставлены значения полей */
  cardContainer.prepend(createCard(newCardObj, deleteCard, likeImg, openImageModal));
  /** Сброс полей */
  addCardForm.reset();
  closeModal(popupNewСard);
}

/** слушатели окна редактирования */
editButton.addEventListener('click', () => openEditProfilePopup(popupProfile));
profileForm.addEventListener('submit', handleEditProfileSubmit);
popupProfileClose.addEventListener('click', () => closeModal(popupProfile));
popupProfile.addEventListener('click', closeModalOverlay);

/** слушатели окна добавления карточки */
addButton.addEventListener('click', () => openModal(popupNewСard));
addCardForm.addEventListener('submit', handleAddNewCard);
popupNewСard.addEventListener('click', closeModalOverlay);
popupNewСardClose.addEventListener('click', () => closeModal(popupNewСard));

/** Слушатели модального окна открытой картинки  */
popupBigPicture.addEventListener('click', closeModalOverlay);
popupBigPictureClose.addEventListener('click', () => closeModal(popupBigPicture));