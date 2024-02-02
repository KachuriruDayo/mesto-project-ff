/**  Функция проверки ответа запроса */
export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

/** Функция изменения состояния текста кнопки */
const renderLoading = (isLoading, button, buttonText='Сохранить', loadingText='Сохранение...') => {
  if (isLoading) {
    button.textContent = loadingText
  } else {
    button.textContent = buttonText
  }
}

/** Универсальная функция отправки запроса */
export const handleSubmit = (request, evt, popup, closeModal, config, resetValidation, loadingText = "Сохранение...") => {
  evt.preventDefault();
  const submitButton = evt.submitter;
  const initialText = submitButton.textContent;
  renderLoading(true, submitButton, initialText, loadingText);
  request()
    .then(() => {
      evt.target.reset(resetValidation(popup, config));
      closeModal(popup);
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, submitButton, initialText);
    });
}
