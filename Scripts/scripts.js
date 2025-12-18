/*menu navigation code*/
var navLinks = document.getElementById("navLinks")
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

const projects = [
    {
        title: "Shark Trivia",
        tooltip: "I created the dialogue system that easily swaps the fonts of chosen characters as well as the systems that exchanged data between scenes.",
        imageURL: "Images/SharkTrivia.png",
        link: "https://saugamedev.itch.io/shark-trivia",
        category: "long" // "short" or "long"
    },
    {
        title: "Run Wild",
        tooltip: "I made the mini games",
        imageURL: "Images/coverpage_runwild.png",
        link: "https://kitfit.itch.io/run-wild",
        category: "short"
    }
];


const gamesRow = document.getElementById("games-row");

projects.forEach(project => {
    // Create the main column
    const col = document.createElement("div");
    col.classList.add("games-col");
    col.setAttribute("data-title", project.title);
    col.setAttribute("data-duration", project.duration);

    // Create the link
    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank";

    // Create the image
    const img = document.createElement("img");
    img.src = project.imageURL;
    img.classList.add("hover-img");
    img.setAttribute("data-tooltip", project.tooltip);

    link.appendChild(img);
    col.appendChild(link);

    // Append to the row
    gamesRow.appendChild(col);
});


// Grab all filter buttons and the games row
const filterButtons = document.querySelectorAll('.project-col');
const tooltip = document.getElementById("mouse-tooltip");
const currentProjects = Array.from(gamesRow.children);
// Function to render projects based on a filter
function renderProjects(filter) {


    // Fade out existing projects
    currentProjects.forEach(project => project.classList.add('fade-out'));

    // Wait for fade-out to complete (match CSS duration)
    setTimeout(() => {
        // Remove all current projects
        gamesRow.innerHTML = '';

        // Filter projects
        let filteredProjects = projects;
        if (filter === "long" || filter === "short") {
            filteredProjects = projects.filter(p => p.category === filter);
        }

        // Add filtered projects with fade-in effect
        filteredProjects.forEach(project => {
            const col = document.createElement("div");
            col.classList.add("games-col", "fade-in");
            col.setAttribute("data-title", project.title);

            const link = document.createElement("a");
            link.href = project.link;
            link.target = "_blank";

            const img = document.createElement("img");
            img.src = project.imageURL;
            img.classList.add("hover-img");
            img.setAttribute("data-tooltip", project.tooltip);

            link.appendChild(img);
            col.appendChild(link);

            const h3 = document.createElement("h3");
            h3.textContent = project.title;
            const p = document.createElement("p");

            col.appendChild(h3);
            col.appendChild(p);

            gamesRow.appendChild(col);

            document.querySelectorAll(".hover-img").forEach(img => {
                img.addEventListener("mouseenter", () => {
                    console.log("mouse enter");
                    tooltip.textContent = img.dataset.tooltip;
                    tooltip.style.opacity = "1";
                });

                img.addEventListener("mousemove", (e) => {
                    tooltip.style.left = e.clientX + "px";
                    tooltip.style.top = e.clientY - 75 + "px";
                });

                img.addEventListener("mouseleave", () => {
                    tooltip.style.opacity = "0";
                });
            });

            // Remove fade-in class after animation ends to keep things clean
            col.addEventListener('animationend', () => col.classList.remove('fade-in'));
        });
    }, 400); // match fade-out duration in ms
    tooltip = document.getElementById("mouse-tooltip");
}



filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter'); // "all", "long", "short"
        renderProjects(filter);
    });
});


/*tooltip hover code*/

renderProjects("all");