const button = document.querySelector('.btn');

function showTooltip() {
  const tooltip = document.querySelector('.popover');
  const arrowTooltip = tooltip.querySelector('.arrow');
  tooltip.classList.toggle('hidden');

  if (tooltip.classList.contains('hidden')) return;

  tooltip.style.top = `${window.scrollY + button.getBoundingClientRect().top - tooltip.offsetHeight - arrowTooltip.offsetHeight}px`;
  tooltip.style.left = `${window.scrollX + button.getBoundingClientRect().left - (tooltip.offsetWidth / 2 - button.offsetWidth / 2)}px`;
}

button.addEventListener('click', showTooltip);
