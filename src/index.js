import './pages/index.css';

import {initialCards} from "./components/cardsContent.js";
import {createCard} from "./components/card.js";
import {openModal, closeModal} from './components/modal.js';

// DOM узлы
const cardContainer = document.querySelector('.places__list');
// Вывести карточки на страницу
initialCards.forEach(el => cardContainer.append(createCard(el.name, el.link)));

// Popup редактирования профиля
const editButton = document.querySelector('.profile__edit-button');
const popup_Profile = document.querySelector('.popup_type_edit');
const profileForm = document.forms.edit_profile;
const nameInput = profileForm.elements.name;
const jobInput = profileForm.elements.description;
//// Данные профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Popup добавления новой карточки
const popup_Newcard = document.querySelector('.popup_type_new-card');
const addButton = document.querySelector('.profile__add-button');
const addCardForm = document.forms.new_place;
const namePlaceInput = addCardForm.elements.place_name;
const linkInput = addCardForm.elements.link;

// слушатели окна редактирования
editButton.addEventListener('click', () => openModal(popup_Profile));
profileForm.addEventListener('submit', profileFormSubmit);

// слушатели окна добавления карточки
addButton.addEventListener('click', () => openModal(popup_Newcard));
addCardForm.addEventListener('submit', addNewCard);

// Обработчик «отправки» формы редактирования профиля
function profileFormSubmit(evt) {
  evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameValue;
    profileDescription.textContent = jobValue;
    // Сброс полей
    nameInput.value = '';
    jobInput.value = '';
    closeModal(popup_Profile);
}

// Обработчик «отправки» формы добавления новой карточки
function addNewCard(evt) {
  evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value
    const namePlaceValue = namePlaceInput.value;
    const linkValue = linkInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    cardContainer.append(createCard(namePlaceValue, linkValue));
    // Сброс полей
    namePlaceInput.value = '';
    linkInput.value = '';
    closeModal(popup_Newcard);
}