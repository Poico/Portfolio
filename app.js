const worksList = [
  {
    title: 'Emídio Navarro High School, Viseu',
    date: '2019-2022',
    description: 'High School Degree in Management and Programming of Computer Systems',
  },
  {
    title: 'Internship at <a href="https://www.stopandgo.net/" target="_blank">STOP and GO</a>',
    date: '2020',
    description: 'Internship in the area of Web Development',
  },
  {
    title: 'TECLA',
    date: '2022',
    description: 'Student Programming Competition of Aveiro <br> <b>2nd Place</b>',
  },
  {
    title: 'ONI',
    date: '2022',
    description: 'National Olympiad of Informatics <br> <b>24th Place</b>',
  },
  {
    title: 'Internship at <a href="https://www.trustvision.pt/" target="_blank">TrustVision</a>',
    date: '2022',
    description: 'Internship in the area of ​Network and Software Development',
  },
  {
    title: 'Instituto Superior Técnico',
    date: '2022-2025',
    description: 'Bachelor\'s Degree in Computer Science and Engineering',
  },
  {
    title: 'Game Dev Técnico',
    date: '2022-Present',
    description: 'Member of the Game Dev Técnico as a Software Developer',
  },
  {
    title: 'ROB916',
    date: '2022-Present',
    description: 'Member of the ROB916 as a Mentor for Middle School Students',
  },
];

async function main() {
  try {
    await showProjects();
    showExperience();    
  } catch(err) {
    console.error('Some error has occurred:', err);
  }
}
main();

async function showProjects() {
  const projectsContainer = document.querySelector('#github-projects');
  const apiUrl = "https://api.github.com/users/Poico/repos?sort=created&per_page=5";
  const response = await fetch(apiUrl);
  const data = await response.json();

  let projectsHtml = '';

  data.forEach(repo => projectsHtml += `
    <div class="bg-neutral text-neutral-content p-4 rounded-lg shadow-md">
      <h3 class="text-lg font-semibold mb-2">${repo.name}</h3>
      <p class="">${
        repo.description || "No description available"
      }</p>
      <a href="${
        repo.html_url
      }" class="text-blue-500 hover:underline" target="_blank">View on GitHub</a>
    </div>
  `);

  projectsContainer.innerHTML = projectsHtml;
}

function showExperience() {
  const experienceContainer = document.querySelector('#experience-timeline');
  const experienceContainer2 = document.querySelector('#experience-timeline2');
  const maxIndexFirst = Math.floor(worksList.length / 2);
  
  let experienceHtml = '';
  let experienceHtml2 = '';
  
  worksList.forEach((work, idx) => {
    if (idx > maxIndexFirst) {
      experienceHtml2 += `
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
          </div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">${work.date}</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${work.title}</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">${work.description}</p>
        </li>
      `
    } else {
      experienceHtml += `
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
          </div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">${work.date}</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${work.title}</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">${work.description}</p>
        </li>
      `
    }
  });

  experienceContainer.innerHTML = experienceHtml;
  experienceContainer2.innerHTML = experienceHtml2;
}
