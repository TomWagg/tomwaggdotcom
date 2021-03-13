console.log("hi");

document.querySelectorAll(".research-projects .card").forEach(function(el) {
    console.log(el);
    el.addEventListener("click", function() {
        this.parentElement.classList.toggle("col-3");
        this.parentElement.classList.toggle("col-9");
        this.querySelector(".hidden-text").classList.toggle("hide");
    });
});

document.querySelector("img.profile").addEventListener("mouseout", function(e) {
    this.classList.toggle("flip");
});