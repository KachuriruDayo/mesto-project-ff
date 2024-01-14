import {imageModal} from './modal.js';

// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
export function createCard(name, link) {
  const cardContent = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardContent.querySelector('.card__image');
  const cardTitle = cardContent.querySelector('.card__title');
  const delButton = cardContent.querySelector('.card__delete-button');
  const likeButton = cardContent.querySelector('.card__like-button');
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  delButton.addEventListener('click', delCard);
  likeButton.addEventListener('click', likeImg);
  cardImage.addEventListener('click', () => imageModal(name, link));
  return cardContent;
}

// Функция удаления карточки
function delCard (event) {
  const cardElement = event.target.closest('.card');
  cardElement.remove();
}

// Функция лайка карточки
function likeImg (event) {
  if (event.target.classList.contains('card__like-button')) {
  event.target.classList.toggle('card__like-button_is-active')
  }
}