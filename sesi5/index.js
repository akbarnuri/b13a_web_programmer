const formElement = document.getElementById('loop-input-form');

formElement.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(e) {
  e.preventDefault();

  const formData = new FormData(formElement);
  const count = formData.get('count');
  const text = formData.get('text');

  const newList = createList(count, text);
  render(newList);
}

function render(element) {
  const result = document.getElementById('result');
  result.replaceChildren(element);
}

function createList(count, text) {
  const newUL = document.createElement('ol');

  try {
    if (!text) throw new Error('The text cannot be empty!');

    for (let counter = 1; counter <= count; counter++) {
      const newLI = document.createElement('li');
      newLI.textContent = text;
      newUL.appendChild(newLI);
    }
  } catch (error) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `Error: ${error.message}`;
    return newParagraph;
  }

  return newUL;
}