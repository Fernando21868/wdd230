const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', function () {
  input.focus();
  if (!input.value.trim()) {
    return;
  } else {
    const deleteButton = document.createElement('button');
    const listElement = document.createElement('li');

    listElement.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.ariaLabel = `Remove ${input.value}`;

    listElement.appendChild(deleteButton);
    list.appendChild(listElement);
    
    deleteButton.addEventListener('click', function () {
      list.removeChild(listElement);
      input.focus();
    });
    input.value = '';
    input.focus();
  }
});
