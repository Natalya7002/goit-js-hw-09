// var selectElement = form.querySelector('input[name="pwd"]');
const emailInput = document.querySelector(
  'form.feedback-form input[name="email"]'
);

const messageInput = document.querySelector(
  'form.feedback-form textarea[name="message"]'
);

const contactForm = document.querySelector('form.feedback-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(JSON.parse(getFormState()));
  resetFormState();
  emailInput.value = '';
  messageInput.value = '';
});

function getFormState() {
  return localStorage.getItem('feedback-form-state');
}

function resetFormState() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: '',
      message: '',
    })
  );
}

const form = getFormState();

if (form == null) {
  resetFormState();
} else {
  let formstate = JSON.parse(form);
  emailInput.value = formstate.email;
  messageInput.value = formstate.message;
}

emailInput.addEventListener('input', saveEmail);

function saveEmail(event) {
  const form = JSON.parse(getFormState());

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: event.target.value.trim(),
      message: form.message,
    })
  );
}

messageInput.addEventListener('input', saveMessage);

function saveMessage(event) {
  const form = JSON.parse(getFormState());
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      message: event.target.value.trim(),
      email: form.email,
    })
  );
}
