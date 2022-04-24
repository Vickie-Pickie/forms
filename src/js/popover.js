export default function popover(elem) {
  let isOpened = false;
  let popoverEl = null;

  function createPopover() {
    popoverEl = document.createElement('div');
    popoverEl.classList.add('popover');

    const block = document.createElement('div');
    block.classList.add('popover_block');
    const title = document.createElement('div');
    title.classList.add('popover_title');
    const content = document.createElement('div');
    content.classList.add('popover_content');

    block.append(title, content);
    popoverEl.append(block);
    document.body.append(popoverEl);
  }

  function open() {
    if (!popoverEl) {
      createPopover();
    }
    popoverEl.querySelector('.popover_title').textContent = elem.dataset.title;
    popoverEl.querySelector('.popover_content').textContent = elem.dataset.content;
    popoverEl.classList.add('active');

    const { x, y, width } = elem.getBoundingClientRect();

    popoverEl.style.top = `${y - popoverEl.offsetHeight}px`;
    popoverEl.style.left = `${x + width / 2 - popoverEl.offsetWidth / 2}px`;

    isOpened = true;
  }

  function close() {
    popoverEl.classList.remove('active');
    isOpened = false;
  }

  function clickHandler(e) {
    e.preventDefault();
    if (!isOpened) {
      open();
    } else {
      close();
    }
  }

  elem.addEventListener('click', (e) => clickHandler(e));

  return {
    open,
    close,
  };
}
