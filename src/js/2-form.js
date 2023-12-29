// const emailInput = document.querySelector(
//   'form.feedback-form input[name="email"]'
// );

// const messageInput = document.querySelector(
//   'form.feedback-form textarea[name="message"]'
// );

// const contactForm = document.querySelector('form.feedback-form');

// contactForm.addEventListener('submit', function (e) {
//   e.preventDefault();
//   console.log(JSON.parse(getFormState()));
//   resetFormState();
//   emailInput.value = '';
//   messageInput.value = '';
// });

// function getFormState() {
//   return localStorage.getItem('feedback-form-state');
// }

// function resetFormState() {
//   localStorage.setItem(
//     'feedback-form-state',
//     JSON.stringify({
//       email: '',
//       message: '',
//     })
//   );
// }

// const form = getFormState();

// if (form == null) {
//   resetFormState();
// } else {
//   let formstate = JSON.parse(form);
//   emailInput.value = formstate.email;
//   messageInput.value = formstate.message;
// }

// emailInput.addEventListener('input', saveEmail);

// function saveEmail(event) {
//   const form = JSON.parse(getFormState());

//   localStorage.setItem(
//     'feedback-form-state',
//     JSON.stringify({
//       email: event.target.value.trim(),
//       message: form.message,
//     })
//   );
// }

// messageInput.addEventListener('input', saveMessage);

// function saveMessage(event) {
//   const form = JSON.parse(getFormState());
//   localStorage.setItem(
//     'feedback-form-state',
//     JSON.stringify({
//       message: event.target.value.trim(),
//       email: form.email,
//     })
//   );
// }
const emailInput = document.querySelector(
  'form.feedback-form input[name="email"]'
);
const messageInput = document.querySelector(
  'form.feedback-form textarea[name="message"]'
);
const contactForm = document.querySelector('form.feedback-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Перевірка наявності обох полів перед відправленням форми
  if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Будь ласка, заповніть обидва поля перед відправленням форми.');
    return;
  }

  // Оновлення локального сховища після успішного входу в систему
  saveFormData();
  resetFormFields();
});

function getFormState() {
  return localStorage.getItem('feedback-form-state');
}

function resetFormState() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: '', message: '' })
  );
}

function saveFormData() {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function resetFormFields() {
  emailInput.value = '';
  messageInput.value = '';
}

// Перевірка наявності даних в локальному сховищі та їх встановлення в поля форми
const storedForm = getFormState();

if (storedForm !== null) {
  const storedFormData = JSON.parse(storedForm);
  emailInput.value = storedFormData.email;
  messageInput.value = storedFormData.message;
}

// Використання одного слухача подій для обох полів
emailInput.addEventListener('input', saveFormData);
messageInput.addEventListener('input', saveFormData);
