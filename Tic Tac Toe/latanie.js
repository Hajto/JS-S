var frequencyUnit = 15;
var skipUnit = 1;
var circleRadius = 80;
var r = circleRadius;
var circleDiameter = r * 2;
var lengthUnit = "px";
var offset = 1;
var rP = Math.pow(r, 2);

var objWidth = 64;
var hObjW = objWidth / 2;
var objHeight = 64;
var hObjH = objHeight / 2;
var objU = "px";

var newX;
var newY;
var newXf;//
var newYf;//
var yf;//

var stopit;

var id1 = "flag1";
var id2 = "flag2";

function circulate2(n) {
    if (n < 100) { n++; p = n + "%"; document.getElementById("flag1").style.top = p; setTimeout(function () { circulate2(n) }, 100); }
}

function circulate(x) {
    if (stopit != 1) {
        if (x <= r) {
            y = Math.sqrt(rP - Math.pow(x, 2));
            newX = (hObjW - x);
            document.getElementById(id1).style.marginLeft = -newX + "px";
            document.getElementById(id2).style.marginLeft = -(hObjH + x) + "px";
            newY = hObjH + y;
            document.getElementById(id1).style.marginTop = -newY + "px";
            document.getElementById(id2).style.marginTop = -(hObjH - y) + "px";
            x += skipUnit;
            setTimeout(function () { circulate(x) }, frequencyUnit);
        }
        else { x = r; circulateBack(x); }
    }
    else {
        document.getElementById(id1).style.display = "none";
        document.getElementById(id2).style.display = "none";
    }
}

function circulateBack(xx) {
    if (stopit != 1) {
        if (xx >= (-r)) {
            y = -(Math.sqrt(rP - Math.pow(xx, 2)));
            newX = (hObjW - xx);
            document.getElementById(id1).style.marginLeft = -newX + "px";
            document.getElementById(id2).style.marginLeft = -(hObjH + xx) + "px";
            //document.getElementById(id3).style.marginLeft = -newX;
            //newXf = (hObjW-(xx+r));
            //document.getElementById(id3).style.marginLeft = -newXf;
            newY = (hObjH + y);
            document.getElementById(id1).style.marginTop = -newY + "px";
            document.getElementById(id2).style.marginTop = -(hObjH - y) + "px";
            //yf = Math.sqrt(rP-Math.pow((xx+r),2));
            //newYf = hObjH-yf;
            //document.getElementById(id3).style.marginTop = -newYf;
            //document.getElementById(id3).style.marginTop = newY;
            xx -= skipUnit;
            setTimeout(function () { circulateBack(xx) }, frequencyUnit);
        }
        else { xx = -r; circulate(xx); }
    }
    else {
        document.getElementById(id1).style.display = "none";
        document.getElementById(id2).style.display = "none";
    }
}

/******************/
/****INITIATION****/
/******************/

function initiate() {
    $("#circle-div").fadeIn(2000);
    circulate(-r);
}

var lateUnit = 120;
var jumpOpacity = 3;
var overlayer = 0;

function unFade() {
    document.getElementById("circle-div").style.display = "block";
    if (overlayer < 100) { //If color is not transparent yet
        overlayer += jumpOpacity; // decrease color darkness
        document.getElementById("circle-div").style.opacity = (overlayer / 100);
        document.getElementById("circle-div").style.filter = "alpha(opacity=" + overlayer + ");" /* For IE8 and earlier */
        setTimeout("unFade()", lateUnit);
    }
}