'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = formatText(input.name);

  input.parentElement.insertBefore(label, input);

  input.placeholder = formatText(input.name);
});

function formatText(str) {
  const replaced = str.replace(/-/g, ' ');
  const withSpaces = replaced.replace(/([A-Z])/g, ' $1').trim();

  return withSpaces[0].toUpperCase() + withSpaces.slice(1).toLowerCase();
}
