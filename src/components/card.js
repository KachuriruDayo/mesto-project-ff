/** Темплейт карточки */
const cardTemplate = document.querySelector('#card-template').content;

/** Функция создания карточки */
export function createCard(cardData, delCard, likeImg, openImageModal) {
  const cardContent = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardContent.querySelector('.card__image');
  const cardTitle = cardContent.querySelector('.card__title');
  const delButton = cardContent.querySelector('.card__delete-button');
  const likeButton = cardContent.querySelector('.card__like-button');
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  delButton.addEventListener('click', () => delCard(cardContent));
  likeButton.addEventListener('click', () => likeImg(likeButton));
  cardImage.addEventListener('click', () => openImageModal(cardData));
  return cardContent;
}