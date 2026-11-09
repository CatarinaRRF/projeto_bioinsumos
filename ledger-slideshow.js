const teamComposition = [
  { label: "Master's", value: 0 },
  { label: 'Doctorate', value: 7 },
  { label: 'Post-doc', value: 4 }
];

const chart = document.querySelector('#team-composition-chart');

if (chart) {
  const visibleTeamComposition = teamComposition.filter(({ value }) => value > 0);
  const maximum = Math.max(...visibleTeamComposition.map(({ value }) => value));
  chart.setAttribute(
    'aria-label',
    `Current counts: ${teamComposition.map(({ label, value }) => `${value} ${label}`).join(', ')} researchers.`
  );
  const bars = visibleTeamComposition.map(({ label, value }) => {
    const bar = document.createElement('div');
    bar.className = 's-stand-bar';
    bar.setAttribute('aria-hidden', 'true');
    bar.style.setProperty('--bar-height', `${(value / maximum) * 100}%`);

    const fill = document.createElement('div');
    fill.className = 'bar-fill';
    const count = document.createElement('span');
    count.className = 'val';
    count.textContent = String(value);

    const column = document.createElement('span');
    column.className = 'col';

    const category = document.createElement('span');
    category.className = 'yr';
    category.textContent = label;

    fill.append(count, column);
    bar.append(fill, category);
    return bar;
  });

  chart.append(...bars);
}
