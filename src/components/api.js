// Токен: 8d6d9f66-054b-4611-9c99-4a20074e4dd8
// Идентификатор группы: wff-cohort-5"

/** Шаблон fetch запроса */
const apiTemplate = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-5',
  headers: {
    authorization: '8d6d9f66-054b-4611-9c99-4a20074e4dd8',
    'Content-Type': 'application/json'
  }
}

/** Запрос карточек */
export const getInitialCards = async () => {
  return fetch(`${apiTemplate.baseUrl}/cards`, {
    headers: apiTemplate.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка вывода карточек: ${res.status}`);
    });
}

/** Запрос данных профиля  */
export const getUserData = async () => {
  return fetch(`${apiTemplate.baseUrl}/users/me`, {
    headers: apiTemplate.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка вывода данных о пользователе: ${res.status}`);
    });
}

/** Запрос обновления данных профиля  */
export const patchUserData = async (name, job) => {
  return fetch(`${apiTemplate.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: apiTemplate.headers,
    body: JSON.stringify({
      name: name,
      about: job
    })
})
.then(res => {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка получения данных о пользователе: ${res.status}`);
})
}

/** Запрос обновления аватара профиля  */
export const patchUserAvatar = async (link) => {
  return fetch(`${apiTemplate.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: apiTemplate.headers,
    body: JSON.stringify({
      avatar: link
    })
})
.then(res => {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка получения данных о аватаре пользователе: ${res.status}`);
})
}

/** Запрос добавления новой карточки */
export const postNewCard = async (namePlace, link) => {
  return fetch(`${apiTemplate.baseUrl}/cards`, {
    method: 'POST',
    headers: apiTemplate.headers,
    body: JSON.stringify({
      name: namePlace,
      link: link
    })
})
.then(res => {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка получения данных о новой карточке: ${res.status}`);
})
}

/** Запрос удаления своей карточки */
export const deleteCard = async (cardId) => {
  return fetch(`${apiTemplate.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: apiTemplate.headers,
  })
  .then(res => {
    return res;
  })
}

/** Запрос лайка карточки */
export const putLikeCard = async (cardId) => {
  return fetch(`${apiTemplate.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: apiTemplate.headers,
})
.then(res => {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка лайка карточки: ${res.status}`);
})
}

/** Запрос отмены лайка карточки */
export const deleteLikeCard = async (cardId) => {
  return fetch(`${apiTemplate.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: apiTemplate.headers,
})
.then(res => {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка отмены лайка карточки: ${res.status}`);
})
}