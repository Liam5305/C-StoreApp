function DisplayDateOnHome() {
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

function greetingMessage() {
    const timeOfDay = new Date().getHours();
    let greeting;
    if (timeOfDay <= 11) {
        greeting = "Good Morning!";
    } else if (timeOfDay >= 12 && timeOfDay <= 14) {
        greeting = "Good Afternoon!";
    } else if (timeOfDay >= 15 && timeOfDay <= 20) {
        greeting = "Good Evening!";
    } else {
        greeting = "Good Night!";
    }

    document.getElementById("greetingMessage").innerHTML = greeting;
}

// AI Generated Below
function createThemeButton() {
    const button = document.createElement('button');
    button.id = 'themeToggle';
    button.innerHTML = '🌙';
    document.body.appendChild(button);
    return button;
}

function initializeTheme() {
    const themeButton = createThemeButton();

    const savedTime = localStoage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
    themeButton.innerHTML = initialTheme === 'dark' ? '☀' : '🌙';

    themeButton.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    const themeButton = document.getElementById('themeToggle');
    if (themeButton) {
        themeButton.innerHTML = newTheme === 'dark' ? '☀' : '🌙';
    }
}
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', theme);
    createThemeToggle();
}

// AI Generated Stopped

window.onload = () => {
    DisplayDateOnHome();
    addRotationEffect('.main-content h1', '.admin-create-item p');
    addEnlargeEffect('.article-content p');
    greetingMessage();
    initTheme();
};