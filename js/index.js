const faqContainer = document.getElementById('faq-container');
// console.log(faqContainer)
const faqSections = document.createElement('div');
faqSections.classList.add('faq-section');
console.log(faqSections)
const faqTitle = document.createElement('h2');
console.log(faqTitle)
faqTitle.innerText="FAQ Section";
faqTitle.style.cssText = `
    color: black;
    padding: 1rem;
    margin: 0;
    text-align: center;
`;
faqSections.appendChild(faqTitle);

const faqData = [
    { question: 'What is A/B testing?', answer: 'A/B testing is a method of comparing two versions of a webpage to see which performs better.' },
    { question: 'How does it work?', answer: 'It splits the audience into two groups, showing each group a different version, and collects performance data.' },
    { question: 'Why is it important?', answer: 'A/B testing helps improve user experience and optimize conversions by relying on data-driven decisions.' },
];

 
 faqContainer.appendChild(faqSections);