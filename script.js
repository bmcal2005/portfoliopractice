const projects = [
  {
    title: "Immersion Cooling",
    year: "2025",
    category: "mechanical",
    description:
      "Developed a 3D COMSOL simulation of immersion cooling where a copper disk dissipates heat into a quiescent water domain. Implemented heat transfer analysis and design comparisons.",
    tags: ["Heat Transfer", "COMSOL", "Thermal Systems"],
    art:
      "linear-gradient(135deg, rgba(25,41,104,.92), rgba(58,36,153,.92)), radial-gradient(circle at 55% 48%, #44d4ff 0 8%, transparent 9%), repeating-linear-gradient(105deg, transparent 0 12px, rgba(255,60,98,.75) 13px 15px)"
  },
  {
    title: "Rear Suspension Design",
    year: "2025",
    category: "mechanical",
    description:
      "Designed and manufactured a rear suspension assembly for a vehicle platform. Conducted topology optimization and FEA to ensure strength under simulated load cases.",
    tags: ["SolidWorks", "FEA", "Topology Optimization"],
    art:
      "linear-gradient(140deg, #e9f1ff, #cfdcff), conic-gradient(from 20deg at 43% 52%, #3424a8, #1b72ff, #47e7cf, #f8ef32, #3424a8)"
  },
  {
    title: "Particle Jamming Device",
    year: "2025",
    category: "materials",
    description:
      "Developed and tested a torsionally jamming actuator. Validated how particle size influences mechanical behavior and created a predictive stiffness model.",
    tags: ["Materials Testing", "Actuator Design", "Predictive Modeling"],
    art:
      "linear-gradient(115deg, #d5d9dc, #ffffff 38%, #b8c6d8), radial-gradient(circle at 50% 18%, #9aa3ad 0 12%, transparent 13%), linear-gradient(90deg, #ef4444 0 18%, transparent 19% 70%, #2563eb 71%)"
  },
  {
    title: "Water Quality Sensors",
    year: "2024",
    category: "electronics",
    description:
      "Programmed microcontrollers to measure weight and salt concentration using distinct resistors. Built LED classification systems to identify test outputs.",
    tags: ["Microcontroller Programming", "Sensor Calibration", "LED Classification System"],
    art:
      "linear-gradient(135deg, #14213d, #0f766e), radial-gradient(circle at 35% 45%, #22c55e 0 6%, transparent 7%), repeating-linear-gradient(90deg, rgba(255,255,255,.25) 0 2px, transparent 2px 18px)"
  },
  {
    title: "Biodegradable Mask",
    year: "2023",
    category: "materials",
    description:
      "Designed and produced a biodegradable mask using grass clippings and native Hawaiian materials. Won funding in an entrepreneurial competition for best concept.",
    tags: ["Sustainable Materials", "Product Design", "Biomaterials Research"],
    art:
      "linear-gradient(135deg, #d9f99d, #86efac 46%, #e5e7eb), radial-gradient(circle at 50% 48%, rgba(255,255,255,.86) 0 24%, transparent 25%)"
  },
  {
    title: "Popsicle Truss Bridge",
    year: "2022",
    category: "structures",
    description:
      "Constructed a popsicle-stick truss bridge with a high performance rating. Presented a redevelopment proposal awarded by engineers and developers.",
    tags: ["Structural Engineering", "Truss Design", "Load Analysis"],
    art:
      "linear-gradient(160deg, #f5d6a3, #8d6e47), repeating-linear-gradient(45deg, transparent 0 24px, rgba(87,50,25,.72) 25px 31px), repeating-linear-gradient(-45deg, transparent 0 24px, rgba(87,50,25,.72) 25px 31px)"
  },
  {
    title: "Thermo Insulating Box",
    year: "2019",
    category: "materials",
    description:
      "Engineered an insulated box that minimized heat loss and allowed predictive thermal modeling. Achieved low heat loss in a science competition prototype.",
    tags: ["Thermal Engineering", "Insulation Design", "Heat Transfer Analysis"],
    art:
      "repeating-linear-gradient(0deg, #6fff00 0 18px, #fff200 18px 36px), repeating-linear-gradient(90deg, rgba(0,0,0,.28) 0 1px, transparent 1px 96px)"
  },
  {
    title: "Aerodynamic Wing Study",
    year: "2024",
    category: "aerodynamics",
    description:
      "Modeled airfoil behavior across varied angles of attack and evaluated lift-to-drag tradeoffs for a lightweight student vehicle concept.",
    tags: ["CFD", "Airfoil Analysis", "Flow Visualization"],
    art:
      "linear-gradient(135deg, #dbeafe, #eff6ff), radial-gradient(ellipse at 46% 52%, #2563eb 0 8%, transparent 9%), repeating-linear-gradient(165deg, rgba(37,99,235,.45) 0 3px, transparent 3px 22px)"
  },
  {
    title: "Portfolio Dashboard",
    year: "2025",
    category: "software",
    description:
      "Built a project dashboard for organizing engineering work, documenting progress, and presenting results with clean filters and responsive cards.",
    tags: ["JavaScript", "Responsive UI", "GitHub Pages"],
    art:
      "linear-gradient(135deg, #111827, #1d4ed8), linear-gradient(90deg, rgba(255,255,255,.18) 0 22%, transparent 23%), radial-gradient(circle at 76% 28%, #34d399 0 10%, transparent 11%)"
  }
];

const projectGrid = document.querySelector("#projectGrid");
const filters = document.querySelectorAll(".filter");

function tagMarkup(tags) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function renderProjects(filter = "all") {
  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  projectGrid.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-image" style="--art: ${project.art}">
            <span class="card-chip">${project.category}</span>
          </div>
          <div class="project-body">
            <div class="project-year">[] ${project.year}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${tagMarkup(project.tags)}</div>
          </div>
        </article>
      `
    )
    .join("");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
