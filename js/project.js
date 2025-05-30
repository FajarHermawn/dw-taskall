document.addEventListener("DOMContentLoaded", function () {
  let projects = [];

  const projectForm = document.getElementById("project-form");

  projectForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const projectData = {
      name: document.getElementById("project-name").value,
      startDate: document.getElementById("start-date").value,
      endDate: document.getElementById("end-date").value,
      description: document.getElementById("Description").value,
      image: document.getElementById("projectImage").files[0],
      technologies: [],
    };

    ["nodejs", "nextjs", "reactjs", "typescript"].forEach((tech) => {
      if (document.getElementById(tech).checked) {
        projectData.technologies.push(
          tech.charAt(0).toUpperCase() + tech.slice(1).replace("js", " JS")
        );
      }
    });

    projects.unshift(projectData);
    renderProjects();
    projectForm.reset();
  });

  window.editProject = function (index) {
    const p = projects[index];
    document.getElementById("project-name").value = p.name;
    document.getElementById("start-date").value = p.startDate;
    document.getElementById("end-date").value = p.endDate;
    document.getElementById("Description").value = p.description;
    ["nodejs", "nextjs", "reactjs", "typescript"].forEach((tech) => {
      document.getElementById(tech).checked = p.technologies.includes(
        tech.charAt(0).toUpperCase() + tech.slice(1).replace("js", " JS")
      );
    });
    projects.splice(index, 1);
    renderProjects();
  };

  window.deleteProject = function (index) {
    if (confirm("Yakin ingin menghapus project ini?")) {
      projects.splice(index, 1);
      renderProjects();
    }
  };

  window.openProjectDetail = function (index) {
    const project = projects[index];
    const imageURL = project.image ? URL.createObjectURL(project.image) : '';
    const win = window.open();
    win.document.write(`
      <h1>${project.name}</h1>
      <p><b>Start:</b> ${project.startDate}</p>
      <p><b>End:</b> ${project.endDate}</p>
      <p><b>Description:</b> ${project.description}</p>
      <p><b>Technologies:</b> ${project.technologies.join(", ")}</p>
      <img src="${imageURL}" style="width:300px; margin-top:10px;" />
    `);
  };

  function renderProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    projects.forEach((project, index) => {
      const start = new Date(project.startDate);
      const end = new Date(project.endDate);
      const diffDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));
      const durationText = diffDays >= 30 ? `${Math.floor(diffDays / 30)} bulan` : `${diffDays} hari`;
      const imageURL = project.image ? URL.createObjectURL(project.image) : '';

      const card = document.createElement("div");
      card.className = "project-card bg-white rounded-xl shadow-lg overflow-hidden";

      card.innerHTML = `
        <img 
          src="${imageURL}" 
          alt="${project.name}" 
          class="w-full h-48 object-cover cursor-pointer" 
          onclick="openProjectDetail(${index})"
        />
        <div class="p-4">
          <h2 class="text-xl font-bold text-gray-800 mb-1">${project.name}</h2>
          <p class="text-sm text-gray-500 mb-2">Durasi: ${durationText}</p>
          <p class="text-gray-700 mb-3">${project.description.slice(0, 100)}...</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${project.technologies.map((tech) => `<span class="tech-badge">${tech}</span>`).join("")}
          </div>
          <div class="flex gap-2">
            <button onclick="editProject(${index}); event.stopPropagation()" class="bg-blue-600 hover:bg-blue-800 text-white px-3 py-1 rounded w-1/2">Edit</button>
            <button onclick="deleteProject(${index}); event.stopPropagation()" class="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded w-1/2">Delete</button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }
});

// TAB BARU INER HTML\
window.openProjectDetail = function (index) {
  const project = projects[index];
  const imageURL = project.image ? URL.createObjectURL(project.image) : '';
  const win = window.open("", "_blank");

  win.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${project.name}</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Roboto', sans-serif;
          background-color: #f9fafb;
          color: #1f2937;
        }
      </style>
    </head>
    <body class="p-6">
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img src="${imageURL}" alt="${project.name}" class="w-full h-96 object-cover">
        <div class="p-6">
          <h1 class="text-3xl font-bold mb-4">${project.name}</h1>
          <div class="grid grid-cols-2 gap-4 mb-4 text-gray-700">
            <p><strong>Start Date:</strong> ${project.startDate}</p>
            <p><strong>End Date:</strong> ${project.endDate}</p>
          </div>
          <p class="mb-4"><strong>Description:</strong></p>
          <p class="mb-6 text-gray-600">${project.description}</p>
          <p class="mb-2"><strong>Technologies:</strong></p>
          <div class="flex flex-wrap gap-2">
            ${project.technologies.map((tech) => `
              <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                ${tech}
              </span>`).join("")}
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
  win.document.close();
};


