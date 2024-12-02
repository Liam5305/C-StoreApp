function DisplayDateOnHome() {
    const today = new Date();
    document.getElementById('currentDate').textContent = today.toLocaleDateString();
}

function addRotationEffect(selector) {
    const element = document.querySelector(selector);
    console.log('Found element', element);
    if (element) {
        element.style.cssText = `
            transition: transform 2s ease;
            transform-origin: center center;
            display: inline-block;
            transform: rotate(0deg);
        `;

        element.addEventListener('mouseenter', () => {
            console.log('Mouse enter')
            element.style.transform = 'rotate(360deg)';
        });

        element.addEventListener('mouseleave', () => {
            console.log('Mouse leave')
            element.style.transform = 'rotate(0deg)';
        });
    }
}

window.onload = () => {
    DisplayDateOnHome();
    addRotationEffect('.main-content h1');
};