const counterContainer = document.getElementById("counter-container");
const experienceContainer = document.createElement("div");
const experienceHeader = document.createElement("h1");
const counterArray = [
  { title: "500", description: "Year Of Experience" },
  { title: "700", description: "Completed Projects" },
  { title: "100", description: "Awards Won" },
  { title: "400", description: "Global Partners" },
];

const singleExperienceContainer = document.createElement("div");
singleExperienceContainer.classList.add("single-experience-item");

const incrementCounter = (element, target) => {
  let count = 0;
  const interval = setInterval(() => {
    if (count < target) {
      count++;
      element.textContent = `${count}+`;
    } else {
      clearInterval(interval);
    }
  }, 50);
};

counterArray.forEach((item) => {
  const experienceItem = document.createElement("div");
  experienceItem.classList.add("single-item");
  experienceItem.innerHTML = `
    <p class="experience-year">0+</p>
    <p class="experience-heading">${item.description}</p>
`;
  const counterElement = experienceItem.querySelector(".experience-year");
  incrementCounter(counterElement, item.title);

  singleExperienceContainer.appendChild(experienceItem);
});
counterContainer.appendChild(singleExperienceContainer);

// experienceHeader.innerHTML = `
// <p class="experience-year">${title}</p>
// <p class="experienceHeading">${description}</p>
// `;
experienceContainer.appendChild(experienceHeader);
console.log(experienceContainer);
counterContainer.appendChild(experienceContainer);
