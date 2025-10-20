let gulbyBadge = document.getElementById("gulbylogo");
let topText = document.getElementById("topcenter");
let fursuitLink = document.getElementById("bottomleft");
let codingLink = document.getElementById("bottomright");

gulbyBadge.addEventListener("click", function() {
    window.location.href = "goopsite.html";
});

gulbyBadge.addEventListener("mouseover", function() {
    gulbyBadge.style.transform = "scale(1.1)";
    gulbyBadge.style.transition = "transform 0.3s ease";
});

gulbyBadge.addEventListener("mouseout", function() {
    gulbyBadge.style.transform = "scale(1)";
});

topText.addEventListener("click", function() {
    //placeholder: do somethign funny like confeti or sound effect
    alert("You clicked the top text!");
});

fursuitLink.addEventListener("click", function() {
    //add link to gulby's fursona page
});

fursuitLink.addEventListener("mouseover", function() {
    fursuitLink.style.transform = "scale(1.1)";
    fursuitLink.style.transition = "transform 0.3s ease";
});

fursuitLink.addEventListener("mouseout", function() {
    fursuitLink.style.transform = "scale(1)";
});

codingLink.addEventListener("click", function() {
    //add link to gulby's coding projects page
});

codingLink.addEventListener("mouseover", function() {
    codingLink.style.transform = "scale(1.1)";
    codingLink.style.transition = "transform 0.3s ease";
});

codingLink.addEventListener("mouseout", function() {
    codingLink.style.transform = "scale(1)";
});