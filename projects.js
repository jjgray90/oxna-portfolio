import myProjects from "./projects.json" assert { type: "json" };

console.log(myProjects);

const getProjects = () => {
  let generateHtml = myProjects.map((project) => {
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




// <div class="projects__project-grid-card">
// <div class="projects__project-grid-card-img-background">
//     <img class="projects__project-grid-card-img" src="https://www.fillmurray.com/400/200"
//         alt="bill murray">
// </div>
// <article class="projects__project-grid-card-content">
//     <div class="projects__project-grid-card-content-headings">
//         <h3 class="projects__project-grid-card-content-skill">REACT</h3>
//         <h2 class="projects__project-grid-card-content-heading">Client Project</h2>
//     </div>
//     <p class="projects__project-grid-card-content-text">
//         Lorem ipsum dolor sit amet consectetur
//         adipisicing elit. Commodi doloribus est aperiam fugiat aliquam duc.
//     </p>
//     <div class="projects__project-grid-card-content-links">
//         <a class="projects__project-grid-card-content-links-item" href="">Code<i
//                 class="projects__project-grid-card-content-links-item-icon fa-solid fa-code"></i></a>
//         <a class="projects__project-grid-card-content-links-item" href="">Preview<i
//                 class="projects__project-grid-card-content-links-item-icon fa-solid fa-eye"></i></a>
//     </div>
// </article>
// </div>

// <div class="projects__project-grid-card">
// <div class="projects__project-grid-card-img-background">
//     <img class="projects__project-grid-card-img" src="https://www.fillmurray.com/700/500"
//         alt="bill murray">
// </div>
// <article class="projects__project-grid-card-content">
//     <div class="projects__project-grid-card-content-headings">
//         <h3 class="projects__project-grid-card-content-skill">JAVA, SPRING BOOT</h3>
//         <h2 class="projects__project-grid-card-content-heading">REST API</h2>
//     </div>
//     <p class="projects__project-grid-card-content-text">
//         Lorem ipsum dolor sit amet consectetur
//         adipisicing elit. Commodi doloribus est aperiam fugiat aliquam duc.
//     </p>
//     <div class="projects__project-grid-card-content-links">
//         <a class="projects__project-grid-card-content-links-item" href="">Code<i
//                 class="projects__project-grid-card-content-links-item-icon fa-solid fa-code"></i></a>
//         <a class="projects__project-grid-card-content-links-item" href="">Preview<i
//                 class="projects__project-grid-card-content-links-item-icon fa-solid fa-eye"></i></a>
//     </div>
// </article>
// </div>

// <div class="projects__project-grid-card">
// <div class="projects__project-grid-card-img-background">
//     <img class="projects__project-grid-card-img" src="https://www.fillmurray.com/800/600"
//         alt="bill murray">
// </div>
// <article class="projects__project-grid-card-content">
//     <div class="projects__project-grid-card-content-headings">
//         <h3 class="projects__project-grid-card-content-skill">REACT</h3>
//         <h2 class="projects__project-grid-card-content-heading">Punk API</h2>
//     </div>
//     <p class="projects__project-grid-card-content-text">
//         Lorem ipsum dolor sit amet consectetur
//         adipisicing elit. Commodi doloribus est aperiam fugiat aliquam duc.
//     </p>
//     <div class="projects__project-grid-card-content-links">
//         <a class="projects__project-grid-card-content-links-item" href="">Code<i
//                 class="projects__project-grid-card-content-links-item-icon fa-solid fa-code"></i></a>
//         <a class="projects__project-grid-card-content-links-item" href="">Preview<i
//                 class="projects__project-grid-card-content-links-item-icon fa-solid fa-eye"></i></a>
//     </div>
// </article>
// </div>

// <div class="projects__project-grid-card">
// <div class="projects__project-grid-card-img-background">
//     <img class="projects__project-grid-card-img" src="https://www.fillmurray.com/400/200"
//         alt="bill murray">
// </div>
// <article class="projects__project-grid-card-content">
//     <div class="projects__project-grid-card-content-headings">
//         <h3 class="projects__project-grid-card-content-skill">REACT</h3>
//         <h2 class="projects__project-grid-card-content-heading">Client Project</h2>
//     </div>
//     <p class="projects__project-grid-card-content-text">
//         Lorem ipsum dolor sit amet consectetur
//         adipisicing elit. Commodi doloribus est aperiam fugiat aliquam duc.
//     </p>
//     <div class="projects__project-grid-card-content-links">
//         <a class="projects__project-grid-card-content-links-item" href="">Code<i
//                 class="projects__project-grid-card-content-links-item-icon fa-solid fa-code"></i></a>
//         <a class="projects__project-grid-card-content-links-item" href="">Preview<i
//                 class="projects__project-grid-card-content-links-item-icon fa-solid fa-eye"></i></a>
//     </div>
// </article>
// </div>

// <div class="projects__project-grid-card">
// <div class="projects__project-grid-card-img-background">
//     <img class="projects__project-grid-card-img" src="https://www.fillmurray.com/700/500"
//         alt="bill murray">
// </div>
// <article class="projects__project-grid-card-content">
//     <div class="projects__project-grid-card-content-headings">
//         <h3 class="projects__project-grid-card-content-skill">JAVA, SPRING BOOT</h3>
//         <h2 class="projects__project-grid-card-content-heading">REST API</h2>
//     </div>
//     <p class="projects__project-grid-card-content-text">
//         Lorem ipsum dolor sit amet consectetur
//         adipisicing elit. Commodi doloribus est aperiam fugiat aliquam duc.
//     </p>
//     <div class="projects__project-grid-card-content-links">
//         <a class="projects__project-grid-card-content-links-item" href="">Code<i
//                 class="projects__project-grid-card-content-links-item-icon fa-solid fa-code"></i></a>
//         <a class="projects__project-grid-card-content-links-item" href="">Preview<i
//                 class="projects__project-grid-card-content-links-item-icon fa-solid fa-eye"></i></a>
//     </div>
// </article>
// </div>

// <div class="projects__project-grid-card">
// <div class="projects__project-grid-card-img-background">
//     <img class="projects__project-grid-card-img" src="https://www.fillmurray.com/800/600"
//         alt="bill murray">
// </div>
// <article class="projects__project-grid-card-content">
//     <div class="projects__project-grid-card-content-headings">
//         <h3 class="projects__project-grid-card-content-skill">REACT</h3>
//         <h2 class="projects__project-grid-card-content-heading">Punk API</h2>
//     </div>
//     <p class="projects__project-grid-card-content-text">
//         Lorem ipsum dolor sit amet consectetur
//         adipisicing elit. Commodi doloribus est aperiam fugiat aliquam duc.
//     </p>
//     <div class="projects__project-grid-card-content-links">
//         <a class="projects__project-grid-card-content-links-item" href="">Code<i
//                 class="projects__project-grid-card-content-links-item-icon fa-solid fa-code"></i></a>
//         <a class="projects__project-grid-card-content-links-item" href="">Preview<i
//                 class="projects__project-grid-card-content-links-item-icon fa-solid fa-eye"></i></a>
//     </div>
// </article>
// </div>