// // @todo: Темплейт карточки
const CardTemplate = document.querySelector('#card-template').content;
// // @todo: DOM узлы
const CardContener = document.querySelector('.places__list');
// // @todo: Функция создания карточки
function addCard(name, link) {
  const CardContent = CardTemplate.querySelector('.card').cloneNode(true);
  const delButton = CardContent.querySelector('.card__delete-button');
  CardContent.querySelector('.card__image').src = link;
  CardContent.querySelector('.card__image').alt = name;
  CardContent.querySelector('.card__title').textContent = name;
  // @todo: Функция удаления карточки
  delButton.addEventListener('click', function () {
    const CardElement = delButton.closest('.card');
    CardElement.remove();
  }); 
  return CardContent;
}

// // @todo: Вывести карточки на страницу
initialCards.forEach(el => CardContener.append(addCard(el.name, el.link)));
