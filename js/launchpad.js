// flip the profile image every time the mouse 'flicks' it
document.querySelector("img.profile").addEventListener("mouseout", function (e) {
    this.classList.toggle("flip");
});

// make projects bounce in, in sequence
let i = 0;
document.querySelectorAll(".project").forEach(function (el) {
    el.addEventListener("mouseenter", function() {
        console.log(this);
        animateCSS(this, "pulse");
    });
    setTimeout(function() {
        el.classList.add("visible")
        animateCSS(el, "fadeIn");
    }, i * 100);
    i += 1;
});

// social link clickers
document.querySelectorAll(".social-link").forEach(function(el) {
    el.addEventListener("click", function() {
        this.children[0].click();
    });
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