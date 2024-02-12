

    var toggleButton = document.getElementById("menu-btn");
    var elementToToggle = document.getElementById("menu-links");

    toggleButton.addEventListener("click", function() {
        elementToToggle.classList.toggle("active");
    });
