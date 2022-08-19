import dataArr from "./data.js";

const getProjects = () => {
  const generateHtml = dataArr.map((project) => {
    return `<div class="projects__project-grid-card">
              <div class="projects__project-grid-card-img-background">
                <img class="projects__project-grid-card-img" 
                  src=${project.img} alt=${project.imgAlt}>
              </div>
              <article class="projects__project-grid-card-content">
                <div class="projects__project-grid-card-content-headings">
                  <h3 class="projects__project-grid-card-content-skill">
                    ${project.skillTags.join(", ").toUpperCase()}
                  </h3>
                    <h2 class="projects__project-grid-card-content-heading">
                      ${project.title}
                    </h2>
                </div>
                <p class="projects__project-grid-card-content-text">
                    ${project.text}
                </p>
                <div class="projects__project-grid-card-content-links">
                  <a class="projects__project-grid-card-content-links-item" 
                    href=${project.gitHub} target="_blank">
                      Code
                      <i class="projects__project-grid-card-content-links-item-icon fa-solid fa-code"></i>
                  </a>
                  <a class="projects__project-grid-card-content-links-item ${
                    project.liveSite ? "" : "projects__project-grid-card-content-links-item--grey"
                  }" 
                    ${
                      project.liveSite ? `href=${project.liveSite}` : null
                    } target="_blank">
                    Preview
                    <i class="projects__project-grid-card-content-links-item-icon fa-solid fa-eye"></i>
                  </a>
                </div>
              </article>
            </div>`;
  });
  document.getElementById("project-grid").innerHTML = generateHtml.join("");
};

window.onload = () => getProjects();
