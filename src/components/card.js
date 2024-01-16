/** Темплейт карточки */
const cardTemplate = document.querySelector('#card-template').content;

/** Функция создания карточки */
export function createCard(cardData, deleteCard, likeImg, openImageModal) {
  const cardContent = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardContent.querySelector('.card__image');
  const cardTitle = cardContent.querySelector('.card__title');
  const delButton = cardContent.querySelector('.card__delete-button');
  const likeButton = cardContent.querySelector('.card__like-button');
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  delButton.addEventListener('click', () => deleteCard(cardContent));
  likeButton.addEventListener('click', () => likeImg(likeButton));
  cardImage.addEventListener('click', () => openImageModal(cardData));
  return cardContent;
}

/** Функция удаления карточки */
export function deleteCard (card) {
  card.remove();
}

/** Функция лайка карточки */
export function likeImg (button) {
  button.classList.toggle('card__like-button_is-active');
}
