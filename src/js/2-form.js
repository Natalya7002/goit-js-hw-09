const emailInput = document.querySelector(
  'form.feedback-form input[name="email"]'
);

const messageInput = document.querySelector(
  'form.feedback-form textarea[name="message"]'
);

const contactForm = document.querySelector('form.feedback-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = JSON.parse(getFormState());

  if (data.email === '' || data.message === '') {
    alert('Please fill in all the fields!');
    return;
  } else {
    alert(
      `Thank you for your feedback! Email: ${data.email}, Message: ${data.message}`
    );
    initFormState();
    emailInput.value = '';
    messageInput.value = '';
  }
});

function getFormState() {
  return localStorage.getItem('feedback-form-state');
}

function initFormState() {
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
  initFormState();
} else {
  let formstate = JSON.parse(form);
  emailInput.value = formstate.email;
  messageInput.value = formstate.message;
}

contactForm.addEventListener('input', e => {
  if (e.target.name === 'email') {
    saveEmail(e.target.value);
  } else if (e.target.name === 'message') {
    saveMessage(e.target.value);
  }
});

function saveEmail(value) {
  const form = JSON.parse(getFormState());

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: value,
      message: form.message,
    })
  );
}

function saveMessage(value) {
  const form = JSON.parse(getFormState());
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      message: value,
      email: form.email,
    })
  );
}
