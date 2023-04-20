const myAdviceGenerator = () => {
    const API_LINK = 'https://api.adviceslip.com/advice'; //API
    const adviceNumber = document.querySelector('.advice_number'); //ADVICE #117
    const adviceQuoteArea = document.querySelector('.quote'); //quote
    const fetchBtn = document.querySelector('button.btn'); //btn dice

    const fetchNewAdvice = async () => {
        const response = await fetch(API_LINK);
        const advice = await response.json();
        return advice;
    };

    const renderAdvice = (adviceObj) => {
        const { id, advice } = adviceObj;
        adviceNumber.textContent = `ADVICE #${id}`;
        adviceQuoteArea.textContent = `“${advice}”`;
    };

    const generateNewAdvice = async () => {
        const data = await fetchNewAdvice();
        const adviceSlip = data.slip;
        // console.log(adviceSlip);
        renderAdvice(adviceSlip);
    };

    this.addEventListener('DOMContentLoaded', () => {
        fetchBtn.addEventListener('click', generateNewAdvice);
    });
};

myAdviceGenerator();
