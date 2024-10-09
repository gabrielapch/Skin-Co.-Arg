document.getElementById("hamburger").addEventListener("click", function() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("active");

    // Cambiar la hamburguesa a "X"
    this.classList.toggle("open");
});
