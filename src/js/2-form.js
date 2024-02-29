
const form = document.querySelector(".feedback-form");
const saveForm = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};
const loadForm = () => {
  const dataStorage = localStorage.getItem("feedback-form-state");
  if (dataStorage) {
    const { email, message } = JSON.parse(dataStorage);
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';

  }
  };
form.addEventListener("input", saveForm);
window.addEventListener("load", loadForm);
form.addEventListener("submit", event => {
  event.preventDefault();
  localStorage.removeItem("feedback-form-state");
  if (form.elements.email.value === "") {
    alert("Введіть електронну пошту");
  } else if (form.elements.message.value === "") {
    alert("Введіть повідомлення");
  }
  else {
    console.log({
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    });
  form.reset();}
});