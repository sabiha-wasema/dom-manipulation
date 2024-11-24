const faqContainer = document.getElementById('faq-container');
// console.log(faqContainer)
const faqSections = document.createElement('div');
faqSections.classList.add('faq-section');
console.log(faqSections)
const faqTitle = document.createElement('h2');
console.log(faqTitle)
faqTitle.innerText="FAQ Section";
faqTitle.style.cssText = `
    background-color: #007bff;
    color: white;
    padding: 1rem;
    margin: 0;
    text-align: center;
`;
faqSections.appendChild(faqTitle);

