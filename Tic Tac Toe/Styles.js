function changeStyle() {
    var styler = document.getElementById("styler");
    var chosen = styler.selectedIndex;
    console.log(chosen);

    switch (chosen) {
        case 0:
            colorBackground = "#E9E9E9";
            colorBorder = "#424242";
            colorBackgroundBefore = "#BCBCBC";
            obrazekX = "img/krzyz.png";
            obrazekY = "img/kolo.png";
            break;
        case 1:
            colorBackground = "#00FF00";
            colorBorder = "#FFFF00";
            colorBackgroundBefore = "#0000FF";
            obrazekX = "img/krzyz1.png";
            obrazekY = "img/kolo1.png";
            break;
    }

    menu.style.background = colorBackground;
    document.getElementById("wrapper").style.background = colorBackground;
    resetFunction();
}

function buttonStyle() {
    soundsButton = document.getElementById("soundsToggler");
    resetButton = document.getElementById("resetter");
    backbutton = document.getElementById("back")
    soundsButton.addEventListener("click", toggleSounds, false);
    resetButton.addEventListener("click", resetFunction, false);
    backbutton.addEventListener("click", backFunction, false);
    soundsButton.style.width = width + "px";
    resetButton.style.width = width + "px";
    backbutton.style.width = width / 3 * 2 + "px";
}
function selectStyle() {
    select = document.getElementById("mySelect");
    select.style.width = width + "px";
    select.addEventListener("change", onChange, false);
    styler = document.getElementById("styler");
    styler.style.width = width + "px";
    styler.addEventListener("change", changeStyle, false);
}

function ArrayToNothing() {
    for (var i = 0; i < size; i++) {
        mainLogicArray[i] = []
        for (var j = 0; j < size; j++)
            mainLogicArray[i][j] = "z";
    }
}
console.log("Style załadowane!");