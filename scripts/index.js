// // @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// // @todo: DOM узлы
const cardContener = document.querySelector('.places__list');
// // @todo: Функция создания карточки
function addCard(name, link, delCard) {
  const cardContent = cardTemplate.querySelector('.card').cloneNode(true);
  const delButton = cardContent.querySelector('.card__delete-button');
  cardContent.querySelector('.card__image').src = link;
  cardContent.querySelector('.card__image').alt = name;
  cardContent.querySelector('.card__title').textContent = name;
  delButton.addEventListener('click', delCard);
  return cardContent;
}
  // @todo: Функция удаления карточки
function delCard (event) {
  const cardElement = event.target.closest('.card');
  cardElement.remove();
}

// // @todo: Вывести карточки на страницу
initialCards.forEach(el => cardContener.append(addCard(el.name, el.link, delCard)));
