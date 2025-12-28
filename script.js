let projects = [
    {
        image: "./images/weather-app-screenshot.png", 
        title: "Wheather App", 
        description: "A weather application that fetches and displays current weather data by city using an external API.",
        link: "https://github.com/pavlevuksanovic08/odin-weather-app"
    },
    {
        image: "./images/battleships-screenshot.png", 
        title: "Battleships", 
        description: "A browser-based Battleships game built with JavaScript, featuring interactive gameplay and computer opponents.",
        link: "https://github.com/pavlevuksanovic08/odin-battleships"
    },
    {
        image: "./images/restaurant-page-screenshot.png",
        title: "Restaurant Page",
        description: "A multi-page restaurant website built with HTML, CSS, and JavaScript, focusing on layout structure and dynamic content rendering.",
        link: "https://github.com/pavlevuksanovic08/odin-restaurant-page"
    },
    {
        image: "./images/todos-screenshot.png",
        title: "To-Do List",
        description: "A JavaScript to-do application for creating, managing, and organizing tasks with a simple and intuitive interface.",
        link: "https://github.com/pavlevuksanovic08/odin-todos"
    },
    {
        image: "./images/calculator-screenshot.png",
        title: "Calculator",
        description: "A functional calculator application built with JavaScript, supporting basic arithmetic operations and a user-friendly interface.",
        link: "https://github.com/pavlevuksanovic08/odin-calculator"
    },
    {
        image: "./images/library-screenshot.png",
        title: "Library",
        description: "A library management system built with JavaScript, allowing users to add, remove, and search for books in a digital collection.",
        link: "https://github.com/pavlevuksanovic08/odin-library"
    }, 
    {
        image: "./images/tictactoe-screenshot.png",
        title: "Tic Tac Toe",
        description: "A classic Tic Tac Toe game implemented in JavaScript, featuring a two-player mode and a simple, interactive interface.",
        link: "https://github.com/pavlevuksanovic08/odin-tictactoe"
    }
]

function loadProjects() {
    let projectsContainer = document.getElementById('projects-container');
    console.log(projectsContainer);
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        let projectArticle = document.createElement('article');
        let projectElement = document.createElement('div');
        projectElement.className = 'project';

        let image = document.createElement('img');
        image.src = project.image || './images/default.png';
        image.alt = project.title || 'Project Screenshot';
        projectElement.appendChild(image);

        let projectDetails = document.createElement('div');
        projectDetails.className = 'project-details';

        let projectTitle = document.createElement('div');
        projectTitle.className = 'project-title';

        let titleElement = document.createElement('h2');
        titleElement.textContent = project.title || 'Untitled Project';
        projectTitle.appendChild(titleElement);

        let linkElement = document.createElement('a');
        linkElement.href = project.link || '#';
        linkElement.target = "_blank";

        let iconElement = document.createElement('img');
        iconElement.className = 'icon';
        iconElement.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
        linkElement.appendChild(iconElement);

        projectTitle.appendChild(linkElement);
        projectDetails.appendChild(projectTitle);
        let descElement = document.createElement('p');
        descElement.textContent = project.description || 'No description available.';
        projectDetails.appendChild(descElement);
        projectElement.appendChild(projectDetails);


        projectArticle.appendChild(projectElement);
        projectsContainer.appendChild(projectArticle);
    });
}

loadProjects();
