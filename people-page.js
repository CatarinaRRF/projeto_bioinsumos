const supervisors = [
  {
    name: 'Rosiane Andrade da Costa',
    affiliation: 'Universidade Católica de Brasília (UCB)',
    photo: 'ra.jpg',
    lattes: 'http://lattes.cnpq.br/6985923669298523',
    orcid: 'https://orcid.org/0000-0002-1739-3731',
    bio: 'PhD in Genomic Sciences and Biotechnology and a biologist from UCB, where she is a Laboratory Specialist in the Biotechnology Laboratory. She supports the Multiuser Laboratory and research and technological innovation projects, with experience in applied microbiology, biochemistry, biotechnology, bioprospecting, biomolecule characterization, neglected fungal diseases, and bioinputs.',
    researchLines: ['Antimicrobials', 'Microbiology', 'Bioprospecting', 'Biomolecule characterization', 'Biotechnology', 'Antifungals', 'Bioinputs', 'Sustainable agricultural products', 'Biodefensives', 'Biofertilizers']
  },
  {
    name: 'Cristine Chaves Barreto',
    affiliation: 'Universidade Federal de Uberlândia (UFU)',
    photo: 'cc.jpg',
    lattes: 'http://lattes.cnpq.br/9973148799581550',
    orcid: 'https://orcid.org/0000-0001-5067-1329',
    bio: 'Biologist with a PhD in Organismic and Evolutionary Biology from the University of Massachusetts Amherst. She was a faculty member in UCB’s graduate program in Genomic Sciences and Biotechnology and has taught in UFU’s Biotechnology program since 2022. Her work focuses on bacterial ecophysiology, Cerrado soil diversity, microbial communities, microbiomes, and biomolecule prospecting.',
    researchLines: ['Environmental microbiology', 'Bacterial ecophysiology', 'Microbial diversity and molecular analysis', 'Cerrado soil microbiomes', 'Biomolecule prospecting']
  },
  {
    name: 'Rose Gomes Monnerat Solon de Pontes',
    affiliation: 'ARBOR Produtos Agrícolas · Universidade de Brasília (UnB)',
    photo: 'rg.jpg',
    lattes: 'http://lattes.cnpq.br/9239372895737198',
    bio: 'Biologist with a PhD in Agronomy from École Nationale Agronomique de Montpellier and postdoctoral experience at Cardiff University. She worked at Embrapa Genetic Resources and Biotechnology from 1989 to 2022, leading development of Bacillus-based bioinsecticides, and later directed R&D&I at SoluBio. She is currently a partner at ARBOR and an associate professor in UnB’s graduate Agronomy program.',
    researchLines: ['Collection and characterization of entomopathogenic Bacillus', 'Bacillus gene prospecting', 'Bacterial bioinsecticide production', 'Insect rearing for bioassays', 'Biological control', 'Bioinput quality control']
  },
  {
    name: 'Marcelo Tavares de Castro',
    affiliation: 'EMBRAPA',
    photo: 'mt.jpg',
    lattes: 'https://lattes.cnpq.br/8650875925657692',
    orcid: 'https://orcid.org/0000-0002-9147-8039',
    bio: 'Plant health and protection researcher at Embrapa Cerrados in Planaltina, Brazil. He holds a PhD in Agronomy focused on entomology and biological pest control, and has worked in plant health, entomology, phytopathology, agricultural microbiology, and biological control using Bacillus spp.',
    researchLines: ['Entomology', 'Phytopathology', 'Bioinputs', 'Biological control of pests and plant diseases', 'Agricultural microbiology', 'Microbial insect control']
  },
  {
    name: 'Antonia Débora Camila de Lima Ferreira',
    affiliation: 'Arbor',
    photo: 'ad.jpg',
    lattes: 'http://lattes.cnpq.br/5761833469810236',
    bio: 'Agronomist with a master’s in Agronomy (Crop Science) and a PhD in Agronomy. Her doctoral research at Embrapa studied the pathogenic, biochemical, and molecular characterization of Bacillus spp. for insect control. She has led R&D&I at SoluScience and has experience in agricultural microbiology, fermentation, bioprocesses, integrated pest management, and insect biological control.',
    researchLines: ['Agricultural microbiology', 'Fermentation and bioprocesses', 'Agricultural entomology', 'Integrated pest management', 'Biological control of insects']
  },
  {
    name: 'Izabela Nunes do Nascimento',
    affiliation: 'Arbor',
    photo: 'in.jpg',
    lattes: 'http://lattes.cnpq.br/7432465341457809',
    bio: 'Agronomist with a master’s and PhD in Agronomy (Plant Protection) from the Federal University of Paraíba. Her doctoral research was conducted in Embrapa Cenargen’s semiochemicals laboratory. Her experience includes agricultural entomology and microbiology, biological pest control, Bacillus-based biological products, insect behavior, semiochemicals, and insect–plant interactions.',
    researchLines: ['Agricultural entomology', 'Agricultural microbiology', 'Biological pest control', 'Bacillus-based biological products', 'Semiochemicals', 'Insect–plant interactions']
  },
  {
    name: 'Gabriela Teodoro Rocha',
    affiliation: 'SoluScience',
    photo: 'gt.jpg',
    lattes: 'http://lattes.cnpq.br/2359978160456197',
    bio: 'Forestry engineer with a PhD from the University of Brasília. Her research experience includes plant breeding, nutrient-use efficiency, abiotic stress, and plant propagation. At Embrapa she collaborated on bacterial identification, including Bacillus, and biological control of agricultural pests using entomopathogenic bacteria. She is currently an R&D&I research analyst at SoluBio.',
    researchLines: ['Bacterial identification and characterization', 'Bacillus', 'Biological control of agricultural pests', 'Entomopathogenic bacteria', 'Plant science']
  },
  {
    name: 'Solange Xavier dos Santos',
    affiliation: 'Universidade Estadual de Goiás (UEG)',
    photo: 'sx.jpg',
    lattes: 'http://lattes.cnpq.br/5471284872073952',
    orcid: 'https://orcid.org/0000-0002-3397-0885',
    bio: 'Professor at UEG, where she teaches and conducts research in Biological Sciences and postgraduate programs. She coordinates FungiLab and FungiPop and curates the cryptogamic collection of Herbarium HUEG. Her experience spans mycology, applied microbiology, science education, and the diversity and biotechnology of Cerrado fungi.',
    researchLines: ['Fungi in biological control', 'Entomopathogenic fungi', 'Fungal biodiversity of the Cerrado', 'Fungi for bioinputs', 'Fungal systematics and ecology', 'Edible and medicinal mushrooms', 'Science communication and environmental education']
  },
  {
    name: 'Octávio Luiz Franco',
    affiliation: 'Universidade Católica de Brasília (UCB)',
    photo: 'ol.jpg',
    lattes: 'http://lattes.cnpq.br/8598274096498065',
    orcid: 'https://orcid.org/0000-0001-9546-0525',
    bio: 'Biologist with a PhD in Molecular Biology from the University of Brasília and postdoctoral experience at Embrapa and the University of Edinburgh. He is a professor at UCB and UCDB and coordinates the National Institute of Science and Technology Bioinspir. His work develops bioproducts and bioprocesses, especially for controlling pathogenic microorganisms.',
    researchLines: ['Bioinspired products', 'Bioproducts and bioprocesses', 'Control of pathogenic microorganisms', 'Molecular biology', 'Biotechnology']
  },
  {
    name: 'Danieli Fernanda Buccini',
    affiliation: 'Universidade Católica Dom Bosco (UCDB)',
    photo: 'df.jpg',
    lattes: 'http://lattes.cnpq.br/2449359296737282',
    orcid: 'https://orcid.org/0000-0001-6381-3779',
    bio: 'Professor in UCDB’s graduate Biotechnology program and a postdoctoral researcher in Biotechnology at UCDB. She holds a PhD in Biotechnology and Biodiversity from the Federal University of Mato Grosso do Sul and a master’s in Biotechnology from UCDB. Her experience includes immunology and pharmacology, with a focus on inflammatory, analgesic, and antimicrobial responses in in vitro and in vivo models.',
    researchLines: ['Biotechnology', 'Microbiology', 'Microbial biochemistry', 'Immunology and pharmacology', 'Antimicrobial responses']
  }
];

const students = [
  { name: 'Geovane Pereira da Silva', category: 'Doutorado', university: 'UEG', photo: 'students/gp.jpg', lattes: 'http://lattes.cnpq.br/0874027961156178' },
  { name: 'Lucas Leonardo da Silva', category: 'Pós-doutorado', university: 'UEG', photo: 'students/ll.jpg', lattes: 'http://lattes.cnpq.br/7973565633480507' },
  { name: 'Miraine Kapeua Ndacnou', category: 'Pós-doutorado', university: 'UEG', photo: 'students/mk.jpg', lattes: 'http://lattes.cnpq.br/9531484739338371' },
  { name: 'Abigail Holanda Pierre da Nobrega', category: 'Doutorado', university: 'UCB', photo: 'students/an.jpg', lattes: 'http://lattes.cnpq.br/2224746548469474' },
  { name: 'Thais Gonzaga Gontijo de Sousa', category: 'Doutorado', university: 'UCB', photo: 'students/tg.jpg', lattes: 'http://lattes.cnpq.br/9514517512206956' },
  { name: 'Rodrigo Mauricio Marinsek Sales', category: 'Doutorado', university: 'UCB', photo: 'students/rm.jpg', lattes: 'http://lattes.cnpq.br/9169916520962863' },
  { name: 'Getúlio Pereira de Oliveira Júnior', category: 'Pós-doutorado', university: 'UCB', photo: 'students/go.jpg', lattes: 'http://lattes.cnpq.br/1505432270571725' },
  { name: 'Bárbara Medeiros', category: 'Doutorado', university: 'UCB', photo: 'students/bm.jpg' },
  { name: 'Cristina Silveira Gravina', category: 'Extensão tecnológica', university: 'UEG', photo: 'students/cs.jpg', lattes: 'http://lattes.cnpq.br/3618838534108534' },
  { name: 'Jordana Alves da Silva Melo', category: 'Pós-doutorado', university: 'UEG', photo: 'students/ja.jpg', lattes: 'http://lattes.cnpq.br/4474882212050573' },
  { name: 'Gabrielli Juliana Ferrandin', category: 'Doutorado', university: 'UCDB', photo: 'students/gf.jpg' },
  { name: 'Eduarda Thiburcio do Nascimento Reis', category: 'Doutorado', university: 'UCDB', photo: 'students/et.jpg' }
];

const groupResearchLines = [
  'Microbial prospecting and characterization',
  'Biological control of agricultural pests and phytopathogens',
  'Development of sustainable biopesticides and bioinputs'
];

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function setupPlaceholderImage(image) {
  const showFallback = () => {
    image.hidden = true;
    image.parentElement.classList.add('has-placeholder');
  };

  image.addEventListener('load', () => image.classList.add('is-loaded'), { once: true });
  image.addEventListener('error', showFallback, { once: true });
  if (image.complete) {
    if (image.naturalWidth > 0) image.classList.add('is-loaded');
    else showFallback();
  }
}

function createPhotoFrame(name, className, photo) {
  const frame = document.createElement('span');
  frame.className = className;

  const fallback = document.createElement('span');
  fallback.className = 'photo-fallback';
  fallback.setAttribute('aria-hidden', 'true');
  fallback.textContent = initials(name);

  if (photo) {
    const image = document.createElement('img');
    image.alt = `Portrait of ${name}`;
    image.src = `img/people/${photo}`;
    setupPlaceholderImage(image);
    frame.append(image);
  } else {
    frame.classList.add('has-placeholder');
  }
  frame.append(fallback);
  return frame;
}

const supervisorGrid = document.querySelector('#supervisor-grid');
const studentGrid = document.querySelector('#student-grid');
const profileDialog = document.querySelector('#supervisor-dialog');
let profileTrigger = null;

function openSupervisorProfile(supervisor, trigger) {
  profileTrigger = trigger;
  document.querySelector('#person-dialog-name').textContent = supervisor.name;
  document.querySelector('#person-dialog-affiliation').textContent = supervisor.affiliation;
  document.querySelector('#person-dialog-bio').textContent =
    supervisor.bio || 'A short professional biography will be added when confirmed with the researcher.';

  const links = document.querySelector('#person-dialog-links');
  links.replaceChildren();
  if (supervisor.orcid) {
    const orcidLink = document.createElement('a');
    orcidLink.href = supervisor.orcid;
    orcidLink.target = '_blank';
    orcidLink.rel = 'noopener noreferrer';
    orcidLink.textContent = 'ORCID profile';
    links.append(orcidLink);
  } else {
    const orcidNote = document.createElement('span');
    orcidNote.textContent = 'ORCID: not provided';
    links.append(orcidNote);
  }

  if (supervisor.lattes) {
    const lattesLink = document.createElement('a');
    lattesLink.href = supervisor.lattes;
    lattesLink.target = '_blank';
    lattesLink.rel = 'noopener noreferrer';
    lattesLink.textContent = 'Lattes curriculum';
    links.append(lattesLink);
  } else {
    const lattesNote = document.createElement('span');
    lattesNote.textContent = 'Lattes: not provided';
    links.append(lattesNote);
  }

  const researchLines = document.querySelector('#person-dialog-research-lines');
  const lines = supervisor.researchLines || groupResearchLines;
  researchLines.replaceChildren(...lines.map((line) => {
    const item = document.createElement('li');
    item.textContent = line;
    return item;
  }));
  document.querySelector('#person-dialog-research-note').textContent = supervisor.researchLines
    ? ''
    : 'Group research themes shown; individual research focus to be confirmed.';

  profileDialog.showModal();
}

supervisors.forEach((supervisor) => {
  const card = document.createElement('article');
  card.className = 'supervisor-card';

  const photoButton = document.createElement('button');
  photoButton.type = 'button';
  photoButton.className = 'supervisor-photo-button';
  photoButton.setAttribute('aria-label', `View profile of ${supervisor.name}`);
  photoButton.append(createPhotoFrame(supervisor.name, 'supervisor-photo', supervisor.photo));
  photoButton.addEventListener('click', () => openSupervisorProfile(supervisor, photoButton));

  const details = document.createElement('div');
  details.className = 'supervisor-card-details';
  const affiliation = document.createElement('span');
  affiliation.className = 'person-affiliation';
  affiliation.textContent = supervisor.affiliation;
  const name = document.createElement('h3');
  name.textContent = supervisor.name;
  const action = document.createElement('span');
  action.className = 'person-card-action';
  action.textContent = 'View profile +';
  details.append(affiliation, name, action);
  card.append(photoButton, details);
  supervisorGrid.append(card);
});

students.forEach((student) => {
  const card = document.createElement(student.lattes ? 'a' : 'article');
  card.className = 'student-card';
  if (student.lattes) {
    card.href = student.lattes;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', `Open Lattes profile for ${student.name}`);
  }
  card.append(createPhotoFrame(student.name, 'student-photo', student.photo));

  const details = document.createElement('div');
  details.className = 'student-card-details';
  const category = document.createElement('span');
  category.className = 'student-category';
  category.textContent = student.category;
  const name = document.createElement('h3');
  name.textContent = student.name;
  const university = document.createElement('span');
  university.className = 'student-university';
  university.textContent = student.university;
  details.append(category, name, university);
  card.append(details);
  studentGrid.append(card);
});

document.querySelectorAll('[data-placeholder-image]').forEach(setupPlaceholderImage);

document.querySelector('.person-dialog-close').addEventListener('click', () => profileDialog.close());
profileDialog.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    profileDialog.close();
  }
});
profileDialog.addEventListener('click', (event) => {
  if (event.target === profileDialog) profileDialog.close();
});
profileDialog.addEventListener('close', () => {
  profileTrigger?.focus();
  profileTrigger = null;
});
