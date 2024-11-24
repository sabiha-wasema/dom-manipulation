const counterContainer = document.getElementById('counter-container');
const experienceContainer = document.createElement('div');
const experienceHeader = document.createElement('h1');
const counterArray = [
    { title: "15+", description: "Year Of Experience" },
    { title: "20+", description: "Completed Projects" },
    { title: "10+", description: "Awards Won" },
    { title: "5+", description: "Global Partners" },
  ];

  const singleExperienceContainer = document.createElement('div');
  singleExperienceContainer.classList.add('single-experience-item');
counterArray.forEach(item =>{
    const experienceItem = document.createElement('div');
    experienceItem.classList.add('single-item')
    experienceItem.innerHTML = `
    <p class="experience-year">${item.title}</p>
    <p class="experience-heading">${item.description}</p>
 
`;
singleExperienceContainer.appendChild(experienceItem)
})
counterContainer.appendChild(singleExperienceContainer)


// experienceHeader.innerHTML = `
// <p class="experience-year">${title}</p>
// <p class="experienceHeading">${description}</p>
// `;
experienceContainer.appendChild(experienceHeader);
console.log(experienceContainer)
counterContainer.appendChild(experienceContainer);
