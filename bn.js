let colorBtn = document.querySelector("#colorbtn");
let mybox = document.querySelector("#mybox");
colorBtn.onclick = function(){
    mybox.classList.add("blue-bg");
}
let shap= document.querySelector("#shapebtn");
shap.onclick = function(){
    mybox.classList.toggle("circle");
}
let hide = document.querySelector("#hidebtn")
hide.onclick = function(){
    mybox.classList.toggle("hide");
}



