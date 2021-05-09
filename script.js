function setGradient() {
    body.style.background = "linear-gradient( " + output + "deg," + color1.value + "," + color2.value + ")";
    css.innerHTML = "background: " + body.style.background + ";";
}

document.onreadystatechange = function() {
    var state = document.readyState
    if (state == 'complete') {
        document.getElementById('interactive');
        setGradient();
    }
}

var css = document.getElementById("code"),
    color1 = document.querySelector(".color1"),
    color2 = document.querySelector(".color2"),
    body = document.getElementById("gradient"),
    slider = document.getElementById("range"),
    rangeValue = document.getElementById("rangeValue"),
    output = 90;

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

rangeValue.innerHTML = slider.value;
slider.oninput = function() {
    output = this.value;
    rangeValue.innerHTML = this.value;
    setGradient();
}