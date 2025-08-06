export default function decorate(block) {
  const firstDiv = block.querySelector(':scope > div');
  const headingText = firstDiv?.textContent || 'Manage your shipments';
  block.innerHTML = '';

  const heading = document.createElement('h2');
  heading.className = 'shipment-actions-heading';
  heading.textContent = headingText;

  const grid = document.createElement('div');
  grid.className = 'shipment-actions-grid';

  // clone original children before innerHTML reset
  const originalChildren = [...firstDiv?.nextElementSibling?.children || []];

  originalChildren.forEach((row) => {
    const cells = [...row.children];
    if (cells.length < 3) return;

    const icon = cells[0].textContent.trim();
    const label = cells[1].textContent.trim();
    const href = cells[2].textContent.trim();

    const item = document.createElement('div');
    item.className = 'action-item';

    const iconSpan = document.createElement('span');
    iconSpan.className = 'action-icon';
    iconSpan.textContent = icon;

    const link = document.createElement('a');
    link.href = href;
    link.textContent = label;

    const labelP = document.createElement('p');
    labelP.appendChild(link);

    item.appendChild(iconSpan);
    item.appendChild(labelP);
    grid.appendChild(item);
  });

  block.appendChild(heading);
  block.appendChild(grid);
}
