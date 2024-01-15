/** Импортируемые элементы */
import './pages/index.css';
import {initialCards} from "./components/cardsContent.js";
import {createCard} from "./components/card.js";
import {openModal, closeModal} from './components/modal.js';

/** DOM узлы */
const cardContainer = document.querySelector('.places__list');

/** Вывести карточки на страницу */
initialCards.forEach(cardData => cardContainer.append(createCard(cardData, delCard, likeImg, openImageModal)));

/** Popup редактирования профиля */
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit');
const profileForm = document.forms.edit_profile;
const nameInput = profileForm.elements.name;
const jobInput = profileForm.elements.description;
/** Данные профиля */
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

/** Popup добавления новой карточки */
const popupNewcard = document.querySelector('.popup_type_new-card');
const addButton = document.querySelector('.profile__add-button');
const addCardForm = document.forms.new_place;
const namePlaceInput = addCardForm.elements.place_name;
const linkInput = addCardForm.elements.link;

/** Popup большая картинка */
const popupBigpicture = document.querySelector('.popup_type_image');
const popupImage = popupBigpicture.querySelector('.popup__image');
const popupCaption = popupBigpicture.querySelector('.popup__caption');

/** функия закрытия окна по клику на оверлей */ 
function closeModalOverlay (event) {
  if (event.target.classList.contains('popup_is-opened'))
  closeModal(event.target);
}

/** Функция удаления карточки */
function delCard (card) {
  card.remove();
}

/** Функция лайка карточки */
function likeImg (button) {
  button.classList.toggle('card__like-button_is-active');
}

/** Функция открытия карточки */ 
function openImageModal (cardData) {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  popupBigpicture.addEventListener('click', closeModalOverlay);
  openModal(popupBigpicture);
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
  cardContainer.prepend(createCard(newCardObj, delCard, likeImg, openImageModal));
  /** Сброс полей */
  addCardForm.reset();
  closeModal(popupNewcard);
}

/** слушатели окна редактирования */
editButton.addEventListener('click', () => {
  popupProfile.addEventListener('click', closeModalOverlay);
  openEditProfilePopup(popupProfile); 
});
profileForm.addEventListener('submit', handleEditProfileSubmit);

/** слушатели окна добавления карточки */
addButton.addEventListener('click', () => {
  popupNewcard.addEventListener('click', closeModalOverlay);
  openModal(popupNewcard); 
});
addCardForm.addEventListener('submit', handleAddNewCard);
