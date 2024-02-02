import {checkResponse} from "./utils";
// Токен: 8d6d9f66-054b-4611-9c99-4a20074e4dd8
// Идентификатор группы: wff-cohort-5"

/** Шаблон fetch запроса */
const apiConfig = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-5',
  headers: {
    authorization: '8d6d9f66-054b-4611-9c99-4a20074e4dd8',
    'Content-Type': 'application/json'
  }
}

/** Функция создания запросов */
const request = async (baseUrl, endpoint, options) => {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(`${baseUrl + endpoint}`, options).then(checkResponse)
}

/** Запрос карточек */
export const getInitialCards = () => {
  return request(apiConfig.baseUrl, '/cards', {headers: apiConfig.headers})
}

/** Запрос данных профиля  */
export const getUserData = () => {
  return request(apiConfig.baseUrl, '/users/me', {headers: apiConfig.headers})
}

/** Запрос обновления данных профиля  */
export const patchUserData = (name, job) => {
  return request(apiConfig.baseUrl, '/users/me', {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      about: job
    })
  })
}

/** Запрос обновления аватара профиля  */
export const patchUserAvatar = (link) => {
  return request(apiConfig.baseUrl, '/users/me/avatar', {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
}

/** Запрос добавления новой карточки */
export const postNewCard = (namePlace, link) => {
  return request(apiConfig.baseUrl, '/cards', {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: namePlace,
      link: link
    })
  })
}

/** Запрос удаления своей карточки */
export const deleteCard = (cardId) => {
  return request(apiConfig.baseUrl, `/cards/${cardId}`, {
    method: 'DELETE',
    headers: apiConfig.headers,
  })
}

/** Запрос лайка карточки */
export const putLikeCard = (cardId) => {
  return request(apiConfig.baseUrl, `/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: apiConfig.headers,
  })
}

/** Запрос отмены лайка карточки */
export const deleteLikeCard = async (cardId) => {
  return request(apiConfig.baseUrl,`/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: apiConfig.headers,
  })
}