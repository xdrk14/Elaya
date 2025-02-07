document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation(); 
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function () {
        dropdownMenu.style.display = "none"; 
    });
});
