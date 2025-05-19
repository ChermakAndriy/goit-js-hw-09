let formData = { email: "", message: "" };
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form");

const emailInput = form.elements.email;
const messageInput = form.elements.message;

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    try {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
    } catch (e) {
    console.error('Parsing error:', e);
    }
}

form.addEventListener("submit", handleFormSubmit);
form.addEventListener("input", handleFormInput);

function handleFormSubmit(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (email === '' || message === '') {
        alert('Fill please all fields');
        return;
    }

    console.log({ email, message });

    formData = { email: '', message: '' };
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}


function handleFormInput(event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

