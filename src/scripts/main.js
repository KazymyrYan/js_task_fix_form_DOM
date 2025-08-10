'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = input.name;

    input.parentElement.insertBefore(label, input);

    const inputName = input.name;

    input.placeholder =
      inputName[0].toUpperCase() + inputName.slice(1).toLowerCase();
  });
});
