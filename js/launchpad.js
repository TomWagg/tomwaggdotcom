console.log("hi");

document.querySelectorAll(".research-projects .card").forEach(function (el) {
    console.log(el);
    el.addEventListener("click", function () {
        this.parentElement.classList.toggle("col-3");
        this.parentElement.classList.toggle("col-9");
        this.querySelector(".hidden-text").classList.toggle("hide");
    });
});

document.querySelector("img.profile").addEventListener("mouseout", function (e) {
    this.classList.toggle("flip");
});

let i = 0;
document.querySelectorAll(".project").forEach(function (el) {
    el.addEventListener("mouseenter", function() {
        console.log(this);
        animateCSS(this, "pulse");
    });
    setTimeout(function() {
        el.classList.add("visible")
        animateCSS(el, "bounceIn");
    }, i * 100);
    i += 1;
});

/**
 * Add a CSS animation
 * @param {*} element element to animate
 * @param {*} animationName which animation
 * @param {*} callback what to do on completion
 */
function animateCSS(element, animationName, callback) {
    let nodes = null;
    if (typeof (element) == "string") {
        nodes = document.querySelectorAll(element);
    } else {
        nodes = [element];
    }
    nodes.forEach(function (node) {
        node.classList.add('animated', animationName);
        $(node).one("animationend", function () {
            this.classList.remove('animated', animationName);
            if (typeof callback === 'function') callback();
        });
    });
}

// let oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "html/test.html");
// oReq.send();

// function reqListener() {
//     console.log(this.responseText);
//     document.getElementById("test").innerHTML = this.responseText;
// }