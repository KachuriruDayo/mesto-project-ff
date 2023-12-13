// // @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// // @todo: DOM узлы
const cardContener = document.querySelector('.places__list');
// // @todo: Функция создания карточки
function addCard(name, link) {
  const cardContent = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardContent.querySelector('.card__image');
  const cardTitle = cardContent.querySelector('.card__title');
  const delButton = cardContent.querySelector('.card__delete-button');
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  delButton.addEventListener('click', delCard);
  return cardContent;
}
  // @todo: Функция удаления карточки
function delCard (event) {
  const cardElement = event.target.closest('.card');
  cardElement.remove();
}

// // @todo: Вывести карточки на страницу
initialCards.forEach(el => cardContener.append(addCard(el.name, el.link)));
