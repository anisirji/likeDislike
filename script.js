let score = document.getElementById("score")

let l = 0

function add(){
    l++
    score.innerHTML = l;
}

function minus(){
    l--
    score.innerHTML = l;
}

