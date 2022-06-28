import myProjects from "./projects.json" assert { type: "json" };

console.log(myProjects);

const getProjects = () => {
  const generateHtml = myProjects.map((project) => {
    // alert("working");
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
                  <a class="projects__project-grid-card-content-links-item" 
                    href=${project.liveSite} target="_blank">
                    Preview
                    <i class="projects__project-grid-card-content-links-item-icon fa-solid fa-eye"></i>
                  </a>
                </div>
              </article>
            </div>`;
  });
  document.getElementById("project-grid").innerHTML = generateHtml.join("");
};

getProjects();
