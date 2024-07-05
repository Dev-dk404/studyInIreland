
function loadNavBar(){
    fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });
}
document.addEventListener('DOMContentLoaded',loadNavBar)

function loadfooter(){
    fetch('footer.html')
    .then(response=>response.text())
    .then(text=>document.getElementById("footer").innerHTML=text)
    .catch(error=>console.log(error));
}
document.addEventListener("DOMContentLoaded",loadfooter)