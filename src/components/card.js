/** Инпорты запросов API */
import {putLikeCard, deleteLikeCard, deleteCard} from './api.js';

/** Темплейт карточки */
const cardTemplate = document.querySelector('#card-template').content;

/** Функция создания карточки */
export const createCard = (cardData, userData, functionData) => {
  const cardContent = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardContent.querySelector('.card__image');
  const cardTitle = cardContent.querySelector('.card__title');
  const delButton = cardContent.querySelector('.card__delete-button');
  const likeButton = cardContent.querySelector('.card__like-button');
  const likeScore = cardContent.querySelector('.like__score');

  /** Проверка соответствий */
  if (!(userData._id === cardData.owner._id)) {
    delButton.classList.add('card__delete-button-disabled');
  }
  cardData.likes.forEach(el => {
    if ((el._id === userData._id)) {
      likeButton.classList.add('card__like-button_is-active');
    }
  });

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  likeScore.textContent = Object.keys(cardData.likes).length;
  delButton.addEventListener('click', () => functionData.openDeleteCardPopup(cardContent, cardData._id));
  likeButton.addEventListener('click', () => functionData.likeImg(likeButton, cardData, likeScore));
  cardImage.addEventListener('click', () => functionData.openImageModal(cardData));
  return cardContent;
}

/** Функция удаления карточки */
export const submitDeleteCard = (data, popup, closeModal) => {
  deleteCard(data.cardId)
  .then (() => {
    data.card.remove();
    closeModal(popup);
  }) 
  .catch (result => {
    console.log(`Ошибка удаления карточки : ${result}`);
  });
}

/** Функция лайка карточки */
export const likeImg = (button, cardData, likeScore) => {
  if (!(button.classList.contains('card__like-button_is-active'))) {
    putLikeCard(cardData._id)
    .then (data => {
      likeScore.textContent = Object.keys(data.likes).length;
      button.classList.add('card__like-button_is-active');
    })
    .catch (result => {
      console.log(`Ошибка лайка карточки : ${result}`);
    });
  } else {
    deleteLikeCard(cardData._id)
    .then(data => {
      likeScore.textContent = Object.keys(data.likes).length;
      button.classList.remove('card__like-button_is-active');
    })
    .catch (result => {
      console.log(`Ошибка убирания лайка карточки : ${result}`);
    });
  }
}
