let fursuitLink = document.getElementById("bottomleft");
let codingLink = document.getElementById("bottomright");
let topText = document.getElementById("toptext");
let semitransparent = document.getElementById("semitransparent");
let iconBody = document.getElementById("topleft");
let nametextBody = document.getElementById("toptext");
let bottomContent = document.getElementById("bottomcontent");
let bottomLeft = document.getElementById("bottomleft");
let bottomRight = document.getElementById("bottomright");



iconBody.style.cursor = "default";
topText.style.cursor = "default";
fursuitLink.style.cursor = "pointer";
codingLink.style.cursor = "pointer";

iconBody.addEventListener("click", function() {
    window.location.href = "goopsite.html";
});

iconBody.addEventListener("mouseover", function() {
    iconBody.style.transform = "scale(1.1)";
    iconBody.style.transition = "transform 0.3s ease";
});

iconBody.addEventListener("mouseout", function() {
    iconBody.style.transform = "scale(1)";
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