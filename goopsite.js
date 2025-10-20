let fursuitLink = document.getElementById("bottomleft");
let codingLink = document.getElementById("bottomright");
let topText = document.getElementById("toptext");
let semitransparent = document.getElementById("semitransparent");
let topLeft = document.getElementById("topleft");
let topCenter = document.getElementById("toptext");
let bottomContent = document.getElementById("bottomcontent");
let bottomLeft = document.getElementById("bottomleft");
let bottomRight = document.getElementById("bottomright");

topLeft.style.cursor = "pointer";
topText.style.cursor = "pointer";
fursuitLink.style.cursor = "pointer";
codingLink.style.cursor = "pointer";

topLeft.addEventListener("click", function() {
    window.location.href = "goopsite.html";
});

topLeft.addEventListener("mouseover", function() {
    topLeft.style.transform = "scale(1.1)";
    topLeft.style.transition = "transform 0.3s ease";
    topLeft.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
});

topLeft.addEventListener("mouseout", function() {
    topLeft.style.transform = "scale(1)";
    topLeft.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
});

topText.addEventListener("mouseover", function() {
    topText.style.transform = "scale(1.05)";
    topText.style.transition = "transform 0.3s ease";
    topCenter.style.backgroundColor = "rgba(255, 255, 255, 0.3)";

});

topText.addEventListener("mouseout", function() {
    topText.style.transform = "scale(1)";
    topCenter.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
});

fursuitLink.addEventListener("click", function() {
    //add link to gulby's fursona page
});

fursuitLink.addEventListener("mouseover", function() {
    fursuitLink.style.transform = "scale(1.1)";
    fursuitLink.style.transition = "transform 0.3s ease";
    bottomLeft.style.backgroundColor = "rgba(255, 255, 255, 0.3)";

});

fursuitLink.addEventListener("mouseout", function() {
    fursuitLink.style.transform = "scale(1)";
    bottomLeft.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
});

codingLink.addEventListener("click", function() {
    //add link to gulby's coding projects page
});

codingLink.addEventListener("mouseover", function() {
    codingLink.style.transform = "scale(1.1)";
    codingLink.style.transition = "transform 0.3s ease";
    bottomRight.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
});

codingLink.addEventListener("mouseout", function() {
    codingLink.style.transform = "scale(1)";
    bottomRight.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
});