var h1 = {
    n1: [document.getElementById("1"),"<img src = 'images/1/截圖 2025-01-12 晚上9.38.30.png'>"],
    n2: [document.getElementById("2"),"<img src = 'images/2/截圖 2025-01-12 晚上9.52.27.png'>"],
    n45: [document.getElementById("45"),"<img src = 'images/4&5/截圖 2025-01-19 晚上8.03.33.png'>"],
    n67: [document.getElementById("67"),"<img src = 'images/6&7/截圖 2025-01-19 晚上8.14.55.png'>"],
    n8: [document.getElementById("8"),"<img src = 'images/8/截圖 2025-01-14 下午5.49.54.png'>"],
    n9: [document.getElementById("9"),"<img src = 'images/9/截圖 2025-01-14 下午5.58.18.png'>"],
    n1012: [document.getElementById("1012"),"<img src = 'images/10&12/截圖 2025-01-14 下午6.06.59.png'>"],
    n11: [document.getElementById("11"),"<img src = 'images/11/截圖 2025-01-14 晚上7.20.38.png'>"],

};

//-------------------------------------------

function hh(a){
    document.getElementById("img").innerHTML = "LOADING..."
    document.getElementById("img").innerHTML = a
};

//-------------------------------------------

h1.n1[0].addEventListener("click",hh1)
function hh1(){
    hh(h1.n1[1])
}

h1.n2[0].addEventListener("click",hh2)
function hh2(){
    hh(h1.n2[1])
}

h1.n45[0].addEventListener("click",hh45)
function hh45(){
    hh(h1.n45[1])
}

h1.n67[0].addEventListener("click",hh67)
function hh67(){
    hh(h1.n67[1])
}

h1.n8[0].addEventListener("click",hh8)
function hh8(){
    hh(h1.n8[1])
}

h1.n9[0].addEventListener("click",hh9)
function hh9(){
    hh(h1.n9[1])
}

h1.n1012[0].addEventListener("click",hh1012)
function hh1012(){
    hh(h1.n1012[1])
}

h1.n11[0].addEventListener("click",hh11)
function hh11(){
    hh(h1.n11[1])
}
