export default function decorate(block) {
  const headingRow = block.querySelector(':scope > div');
  const headingText = headingRow?.textContent?.trim();

  const secondRow = headingRow?.nextElementSibling;
  const cells = [...(secondRow?.children || [])];

  block.innerHTML = '';

  if (headingText) {
    const heading = document.createElement('h2');
    heading.className = 'shipment-actions-heading';
    heading.textContent = headingText;
    block.appendChild(heading);
  }

  const grid = document.createElement('div');
  grid.className = 'shipment-actions-grid';

  cells.forEach((cell) => {
    const img = cell.querySelector('img');
    const link = cell.querySelector('a');

    if (!img || !link) return;

    const item = document.createElement('div');
    item.className = 'action-item';

    item.appendChild(img.cloneNode(true));

    const cardLink = document.createElement('a');
    cardLink.className = 'action-link';
    cardLink.href = link.href;
    cardLink.setAttribute('aria-label', 'Shipment action');
    item.appendChild(cardLink);

    grid.appendChild(item);
  });

  block.appendChild(grid);
}
