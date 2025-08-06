export default function decorate(block) {
  const headingRow = block.querySelector(':scope > div');
  const headingText =
    headingRow?.textContent?.trim() || 'Manage your shipments';

  const secondRow = headingRow?.nextElementSibling;
  const cells = [...(secondRow?.children || [])];

  // Clear the block content
  block.innerHTML = '';

  // Create heading
  const heading = document.createElement('h2');
  heading.className = 'shipment-actions-heading';
  heading.textContent = headingText;

  // Create grid container
  const grid = document.createElement('div');
  grid.className = 'shipment-actions-grid';

  // Loop over each icon+link cell
  cells.forEach((cell) => {
    const img = cell.querySelector('img');
    const link = cell.querySelector('a');

    // Skip if either image or link is missing
    if (!img || !link) return;

    // Create card container
    const item = document.createElement('div');
    item.className = 'action-item';

    // Clone and append the image (outside the <a>)
    item.appendChild(img.cloneNode(true));

    // Create and append the empty clickable link
    const cardLink = document.createElement('a');
    cardLink.className = 'action-link';
    cardLink.href = link.href;
    cardLink.setAttribute('aria-label', 'Shipment action');
    item.appendChild(cardLink);

    // Add item to the grid
    grid.appendChild(item);
  });

  // Append heading and grid to block
  block.appendChild(heading);
  block.appendChild(grid);
}
