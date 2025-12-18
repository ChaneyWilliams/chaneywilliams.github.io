/*menu navigation code*/
var navLinks = document.getElementById("navLinks")
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}
/*tooltip hover code*/
const tooltip = document.getElementById("mouse-tooltip");

document.querySelectorAll(".hover-img").forEach(img => {
    img.addEventListener("mouseenter", () => {
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

