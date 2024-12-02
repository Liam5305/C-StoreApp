﻿function DisplayDateOnHome() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const today = new Date();
        dateElement.textContent = today.toLocaleDateString();
    }
}

function addRotationEffect(...selectors) {
    selectors.forEach(selector => {
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
    })
}

function addEnlargeEffect(selector) {
    const element = document.querySelector(selector)
    console.log('element found', element);
    if (element) {
        element.style.cssText = `
        transition: transform 2s ease;
        transform: scale(1);
        `;

        element.addEventListener('mouseenter', () => {
            console.log('mouseenter')
            element.style.transform = 'scale(1.2)';
        });

        element.addEventListener('mouseleave', () => {
            console.log('mouseleave')
            element.style.transform = 'scale(1)';
        });
    }
}

window.onload = () => {
    DisplayDateOnHome();
    addRotationEffect('.main-content h1', '.admin-create-item p');
    addEnlargeEffect('.article-content p');
};