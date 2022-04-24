import popover from '../popover';

test('поповер отображается после клика', () => {
  document.body.innerHTML = `<button id="btn" data-title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">
    Click to toggle Popover
  </button>`;

  const btn = document.getElementById('btn');
  popover(btn);

  let popoverEl = document.querySelector('.popover');
  expect(popoverEl).toBeNull();
  btn.click();

  popoverEl = document.querySelector('.popover');
  expect(popoverEl).not.toBeNull();

  expect(popoverEl.querySelector('.popover_title').textContent).toBe('Popover title');
  expect(popoverEl.querySelector('.popover_content').textContent).toBe('And here\'s some amazing content. It\'s very engaging. Right?');
});
