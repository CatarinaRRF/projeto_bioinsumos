const universities = {
  UEG: 'Universidade Estadual de Goiás',
  UCB: 'Universidade Católica de Brasília',
  UCDB: 'Universidade Católica Dom Bosco'
};

const projects = [
  {
    student: 'Geovane Pereira da Silva',
    category: 'Doutorado',
    university: 'UEG',
    supervisors: 'Solange Xavier dos Santos; Lucas Leonardo da Silva',
    title: 'Eficácia entomopatogênica e resposta metabolômica de fungos à associação com agentes de controle biológico e químico para o manejo de Spodoptera frugiperda',
    objective: 'Avaliar a compatibilidade de fungos entomopatogênicos com produtos biológicos e químicos utilizados na sojicultura, visando ao desenvolvimento de estratégias e combinações tecnicamente viáveis para aplicação conjunta no controle de Spodoptera frugiperda.',
    species: 'Spodoptera frugiperda',
    product: '',
    microorganism: ''
  },
  {
    student: 'Lucas Leonardo da Silva',
    category: 'Pós-doutorado',
    university: 'UEG',
    supervisors: 'Solange Xavier dos Santos',
    title: 'Desenvolvimento de um blend de fungos esporulantes para condicionamento do solo',
    objective: 'Desenvolver um blend personalizado de fungos esporulantes, obtidos a partir de isolados de solos de mata nativa e de áreas de cultivo de soja, para utilização como condicionador biológico do solo em sistemas de sojicultura.',
    species: '',
    product: '',
    microorganism: 'Não específico — fungos isolados do solo'
  },
  {
    student: 'Miraine Kapeua Ndacnou',
    category: 'Pós-doutorado',
    university: 'UEG',
    supervisors: 'Solange Xavier dos Santos',
    title: 'Impact of the application of fungi-based bioinputs on soil health in soybean cultivation areas',
    objective: 'Investigate native fungal isolates from soybean-producing soils in the Brazilian Cerrado, evaluating their dual-functional capacity on soil health indicators and biological control against Asian soybean rust (Phakopsora pachyrhizi) and target spot (Corynespora cassiicola).',
    species: 'Phakopsora pachyrhizi; Corynespora cassiicola',
    product: '',
    microorganism: 'Fungi isolated from soil'
  },
  {
    student: 'Abigail Nobrega',
    category: 'Doutorado',
    university: 'UCB',
    supervisors: 'Rosângela Vieira de Andrade',
    title: 'Avaliação sinérgica de microrganismos para o controle de Meloidogyne incognita em soja',
    objective: 'Avaliar o potencial sinérgico de cepas bacterianas no controle de Meloidogyne incognita em soja, com foco na eficácia em condições controladas e de campo, e na caracterização de metabólitos bioativos.',
    species: 'Nematoides, especialmente Meloidogyne incognita',
    product: '',
    microorganism: 'Bacillus subtilis ABR25; B. velezensis ABR12; Citobacillus firmus ABR02'
  },
  {
    student: 'Thais Gonzaga',
    category: 'Doutorado',
    university: 'UCB',
    supervisors: 'Cristine Chaves Barreto',
    title: 'Do genoma para o campo: identificação e caracterização in silico e in vitro de bioativos para potencial uso no controle biológico de fitopatógenos da soja (Glycine max)',
    objective: 'Identificar, caracterizar e avaliar, por métodos in silico, in vitro e in vivo, bioativos envolvidos no controle biológico de fungos fitopatogênicos da soja (Glycine max) a partir de isolados de bactérias das espécies B. amyloliquefaciens, B. subtilis e B. velezensis.',
    species: 'Sclerotinia sclerotiorum; Macrophomina phaseolina; Fusarium solani; Rhizoctonia solani',
    product: '',
    microorganism: 'Bacillus amyloliquefaciens ABR03 e ABR15; B. subtilis ABR13, ABR25 e ABR21; B. velezensis ABR04, ABR12 e ABR36'
  },
  {
    student: 'Rodrigo Marinsek Sales',
    category: 'Doutorado',
    university: 'UCB',
    supervisors: 'Getúlio Pereira de Oliveira Júnior; Maria Sueli Soares Felipe',
    title: 'Vesículas extracelulares bacterianas como plataforma de entrega de bioinseticidas para controle de pragas agrícolas',
    objective: '',
    species: 'Anticarsia gemmatalis (lagarta-da-soja); Melanagromyza sojae (mosca-da-haste-da-soja); Diabrotica speciosa (vaquinha)',
    product: '',
    microorganism: 'Bacillus thuringiensis ABR1, ABR198 e ABR039'
  },
  {
    student: 'Getulio Oliveira',
    category: 'Pós-doutorado',
    university: 'UCB',
    supervisors: 'Maria Sueli Soares Felipe',
    title: 'Vesículas extracelulares bacterianas no controle de patógenos de plantas',
    objective: '',
    species: 'Euschistus heros',
    product: '',
    microorganism: 'Chromobacterium subtsugae; Bacillus thuringiensis'
  },
  {
    student: 'Bárbara Medeiros',
    category: 'Doutorado',
    university: 'UCB',
    supervisors: 'Maria Sueli Soares Felipe',
    title: 'Desenvolvimento de biopesticidas à base de fungos entomopatogênicos para o controle de mosca-branca (Bemisia tabaci biótipo B)',
    objective: 'Caracterizar 11 isolados de B. bassiana, M. anisopliae e Cordyceps spp.; avaliar sua virulência contra Bemisia tabaci; selecionar as cepas mais promissoras por análises morfológicas, bioquímicas e moleculares; determinar CL₅₀ e TL₅₀; definir condições de cultivo e fermentação; validar uma formulação sólida; e testar sua eficiência no controle da mosca-branca em laboratório e casa de vegetação, visando ao desenvolvimento de um bioinseticida eficaz.',
    species: 'Bemisia tabaci (mosca-branca)',
    product: '',
    microorganism: 'Beauveria bassiana; Cordyceps spp.; Metarhizium anisopliae'
  },
  {
    student: 'Cristina Silveira Gravina',
    category: 'Extensão tecnológica',
    university: 'UEG',
    supervisors: 'Solange Xavier dos Santos',
    title: 'Isolamento e preservação de microrganismos do solo do Cerrado para o desenvolvimento de bioinsumos agrícolas',
    objective: 'Isolar microrganismos do solo de áreas cultivadas com soja e de mata nativa, visando ampliar o banco de linhagens candidatas a bioinsumos, além de manter e organizar a coleção de culturas do FungiLab/UEG.',
    species: '',
    product: '',
    microorganism: 'Isolamento de Bacillus'
  },
  {
    student: 'Jordana Alves da Silva Melo',
    category: 'Pós-doutorado',
    university: 'UEG',
    supervisors: 'Solange Xavier dos Santos',
    title: 'Fungos endofíticos como fonte de bioinsumos: uma estratégia para o manejo das doenças de final de ciclo da soja',
    objective: 'Identificar fungos endofíticos com potencial para o desenvolvimento de bioinsumos para o controle de doenças de final de ciclo da soja.',
    species: 'Septoria glycines; Cercospora kikuchii',
    product: '',
    microorganism: 'Fungos endofíticos'
  },
  {
    student: 'Gabrielli Juliana Ferrandin',
    category: 'Doutorado',
    university: 'UCDB',
    supervisors: 'Carina Elisei de Oliveira',
    title: 'Caracterização genômica de isolados de Bacillus pumilus, Bacillus safensis e Bacillus subtilis com potencial aplicação no controle biológico de fungos patogênicos',
    objective: 'Mapear genes e clusters biossintéticos de metabólitos antifúngicos nos genomas de B. pumilus, B. safensis e B. subtilis; identificar lipopeptídeos e enzimas hidrolíticas, como fengicina e quitinases, capazes de degradar a parede celular de Phakopsora pachyrhizi; avaliar a inibição da ferrugem asiática por bioensaios com sobrenadantes das cepas; e otimizar meios de cultivo para maximizar a produção de compostos bioativos e sua eficiência no biocontrole.',
    species: 'Phakopsora pachyrhizi',
    product: '',
    microorganism: 'Isolados ABR 056 e ABR 062 (B. pumilus); ABR 069, ABR 070 e ABR 071 (B. subtilis); ABR 072, ABR 073 e ABR 074 (B. safensis)'
  },
  {
    student: 'Eduarda Thiburcio do Nascimento Reis',
    category: 'Doutorado',
    university: 'UCDB',
    supervisors: 'Marlon Henrique Cardoso',
    title: 'Da molécula ao campo: estratégias biotecnológicas baseadas em peptídeos e silenciamento gênico para o manejo da antracnose na soja',
    objective: 'Desenvolver estratégias biotecnológicas baseadas em bioinformática para o manejo da antracnose da soja, causada por Colletotrichum truncatum, utilizando duas abordagens: desenvolver peptídeos capazes de inibir a enzima cutinase, importante para a fitopatogenicidade do fungo, e moléculas de dsRNA destinadas ao silenciamento do gene CtCut1, responsável pela codificação da cutinase.',
    species: 'Colletotrichum truncatum',
    product: '',
    microorganism: 'Colletotrichum truncatum'
  }
];

const categoryFilter = document.querySelector('#category-filter');
const universityFilter = document.querySelector('#university-filter');
const projectList = document.querySelector('#project-list');
const resultsCount = document.querySelector('#project-results-count');
const emptyMessage = document.querySelector('#project-empty');
const dialog = document.querySelector('#project-dialog');
let dialogTrigger = null;

const categories = [...new Set(projects.map(({ category }) => category))];
categories.forEach((category) => {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  categoryFilter.append(option);
});

Object.entries(universities).forEach(([code, name]) => {
  const option = document.createElement('option');
  option.value = code;
  option.textContent = `${code} — ${name}`;
  universityFilter.append(option);
});

function createProjectCard(project) {
  const article = document.createElement('article');
  article.className = 'project-card';

  const meta = document.createElement('div');
  meta.className = 'project-card-meta';
  const category = document.createElement('span');
  category.className = 'project-category';
  category.textContent = project.category;
  const institution = document.createElement('span');
  institution.className = 'project-institution';
  institution.textContent = project.university;
  meta.append(category, institution);

  const title = document.createElement('h3');
  title.textContent = project.title;
  const objective = document.createElement('p');
  objective.className = 'project-summary';
  objective.textContent = project.objective || 'Project objective details will be added soon.';

  const footer = document.createElement('div');
  footer.className = 'project-card-footer';
  const student = document.createElement('span');
  student.textContent = project.student;
  const detailsButton = document.createElement('button');
  detailsButton.className = 'project-details-button';
  detailsButton.type = 'button';
  detailsButton.textContent = 'View project details';
  detailsButton.addEventListener('click', () => openProjectDialog(project, detailsButton));
  footer.append(student, detailsButton);

  article.append(meta, title, objective, footer);
  return article;
}

function renderProjects() {
  const filteredProjects = projects.filter((project) => (
    (!categoryFilter.value || project.category === categoryFilter.value)
    && (!universityFilter.value || project.university === universityFilter.value)
  ));

  projectList.replaceChildren(...filteredProjects.map(createProjectCard));
  resultsCount.textContent = `Showing ${filteredProjects.length} of ${projects.length} projects`;
  emptyMessage.hidden = filteredProjects.length > 0;
}

function openProjectDialog(project, trigger) {
  dialogTrigger = trigger;
  document.querySelector('#project-dialog-kicker').textContent =
    `${project.category} · ${project.university} — ${universities[project.university]}`;
  document.querySelector('#project-dialog-title').textContent = project.title;
  document.querySelector('#project-dialog-student').textContent = project.student;

  const detailList = document.querySelector('#project-dialog-details');
  const fields = [
    ['Academic category', project.category],
    ['Affiliated university', universities[project.university]],
    ['Student / researcher', project.student],
    ['Published', 'No'],
    ['DOI', 'Not specified'],
    ['Status', 'In progress'],
    ['Supervisor(s)', project.supervisors],
    ['Objective', project.objective],
    ['Target species', project.species],
    ['Commercial product', project.product],
    ['Microorganism(s) studied', project.microorganism]
  ];

  detailList.replaceChildren(...fields.flatMap(([label, value]) => {
    const term = document.createElement('dt');
    term.textContent = label;
    const description = document.createElement('dd');
    description.textContent = value || 'Not specified';
    return [term, description];
  }));
  dialog.showModal();
}

categoryFilter.addEventListener('change', renderProjects);
universityFilter.addEventListener('change', renderProjects);
document.querySelector('#reset-project-filters').addEventListener('click', () => {
  categoryFilter.value = '';
  universityFilter.value = '';
  renderProjects();
});
document.querySelector('.project-dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    dialog.close();
  }
});
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  dialogTrigger?.focus();
  dialogTrigger = null;
});

renderProjects();
