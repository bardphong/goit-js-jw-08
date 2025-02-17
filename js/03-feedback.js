import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', throttle(onFormData, 500));
feedbackForm.addEventListener('submit', onSubmitForm);

const formText = {};



function onFormData(event) {
  formText[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formText));
}

function onSubmitForm(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
}

function loadFormData() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (data) {
      email.value = data.email;
      message.value = data.message;
    }
  }
  
loadFormData();