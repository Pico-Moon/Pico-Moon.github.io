var h1 = {
    n1: [document.getElementById("1"),"<img src = 'images/1/截圖 2025-01-12 晚上9.38.30.png'>"],
    n2: [document.getElementById("2"),"<img src = 'images/2/截圖 2025-01-12 晚上9.52.27.png'>"],
};

function hh(a){
    document.getElementById("img").innerHTML = a
};

h1.n1[0].addEventListener("click",hh1)
function hh1(){
    hh(h1.n1[1])
}

h1.n2[0].addEventListener("click",hh2)
function hh2(){
    hh(h1.n2[1])
}