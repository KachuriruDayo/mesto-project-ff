// // @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// // @todo: DOM узлы
const cardContener = document.querySelector('.places__list');
// // @todo: Функция создания карточки
function addCard(name, link) {
  const cardContent = cardTemplate.querySelector('.card').cloneNode(true);
  const delButton = cardContent.querySelector('.card__delete-button');
  cardContent.querySelector('.card__image').src = link;
  cardContent.querySelector('.card__image').alt = name;
  cardContent.querySelector('.card__title').textContent = name;
  // @todo: Функция удаления карточки
  delButton.addEventListener('click', function () {
    const cardElement = delButton.closest('.card');
    cardElement.remove();
  }); 
  return cardContent;
}

// // @todo: Вывести карточки на страницу
initialCards.forEach(el => cardContener.append(addCard(el.name, el.link)));
