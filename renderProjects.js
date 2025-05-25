import { projects } from './data.js';


const container = document.querySelector('.projects');

projects.forEach(project => {
    console.log("azer");
  const box = document.createElement('div');
  box.className = 'projectBox';

  box.innerHTML = `
    <a href="${project.liveLink}" target="_blank">
      <div class="screenShot">
        <img src="${project.image}" alt="${project.alt}">
      </div>
    </a>
    <div class="headingContainer">
      <div class="projectName">${project.name}</div>
      <div>
        <a href="${project.githubLink}" target="_blank">
          <i class="icone devicon-github-original-wordmark colored"></i>
        </a>
        <a href="${project.liveLink}" target="_blank">
          <i class="icone fa-solid fa-arrow-up-right-from-square fa-sm" 
            style="color: #000000;font-size: var(--font-size-small);"></i>
        </a>
      </div>
    </div>
    <div class="description">${project.description}</div>
  `;

  container.appendChild(box);
});
