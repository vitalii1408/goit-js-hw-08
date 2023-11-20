import throttle from 'lodash/throttle';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('[name="email"]');
  const messageInput = form.querySelector('[name="message"]');
  const feedbackFormStateKey = 'feedback-form-state';
  const saveToLocalStorageThrottled = throttle(saveToLocalStorage, 500);
  form.addEventListener('input', saveToLocalStorageThrottled);
  loadFromLocalStorage();
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
      clearLocalStorage();
      console.log(getFormData());
      emailInput.value = '';
      messageInput.value = '';
    } else {
      alert('Будь ласка, заповніть всі поля перед відправкою.');
    }
  });
  function saveToLocalStorage() {
    const formData = getFormData();
    localStorage.setItem(feedbackFormStateKey, JSON.stringify(formData));
  }

  function loadFromLocalStorage() {
    const storedData = localStorage.getItem(feedbackFormStateKey);
    if (storedData) {
      const formData = JSON.parse(storedData);
      setFormData(formData);
    }
  }
  function clearLocalStorage() {
    localStorage.removeItem(feedbackFormStateKey);
  }
  function getFormData() {
    return {
      email: emailInput.value,
      message: messageInput.value,
    };
  }
  function setFormData(formData) {
    if ('message' in formData) {
      messageInput.value = formData.message;
    }
  }
  function validateForm() {
    return emailInput.value.trim() !== '' && messageInput.value.trim() !== '';
  }
});
