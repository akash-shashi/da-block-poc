export default function decorate(block) {
    // Create heading
    const headingRow = block.querySelector('div');
    const headingText = headingRow?.textContent || 'Manage your shipments';
    const heading = document.createElement('h2');
    heading.className = 'shipment-actions-heading';
    heading.textContent = headingText;
    block.innerHTML = ''; // Clear block
  
    // Create grid
    const grid = document.createElement('div');
    grid.className = 'shipment-actions-grid';
  
    // Loop through remaining rows
    [...block.children].slice(1).forEach((row) => {
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
  