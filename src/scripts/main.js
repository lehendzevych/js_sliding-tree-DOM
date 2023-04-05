'use strict';

const list = document.querySelector('.tree');
const listItems = list.querySelectorAll('li');

listItems.forEach(item => {
  if (item.children.length) {
    const textNode = item.firstChild;
    const spanTitle = document.createElement('span');

    textNode.before(spanTitle);
    spanTitle.prepend(textNode);
  }
});

list.addEventListener('click', (e) => {
  const item = e.target.closest('span');

  if (!item) {
    return;
  }

  item.nextElementSibling.toggleAttribute('hidden');
});
