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

faqData.forEach(({ question, answer }) => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');
    faqItem.style.cssText = `
    background-color:  #f0f8ff;
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
`;
    // console.log(faqItem)

    const faqQuestion = document.createElement('button');
    // console.log(faqQuestion)
    faqQuestion.classList.add('faq-question');
    faqQuestion.innerHTML = `
        <span style="color: #007bff;">${question}</span>
       <i class="fa-solid fa-chevron-down"></i>
    `;
    const faqAnswer = document.createElement('div');
            faqAnswer.classList.add('faq-answer');
            faqAnswer.textContent = answer;

            faqQuestion.addEventListener('click', () => {
                const isActive = faqAnswer.style.display === 'block';
                faqAnswer.style.display = isActive ? 'none' : 'block';
                faqQuestion.classList.toggle('active', !isActive);
            });

    faqItem.appendChild(faqQuestion);
    faqItem.appendChild(faqAnswer);

    faqSections.appendChild(faqItem);
})
 
 faqContainer.appendChild(faqSections);