let colorBtn = document.querySelector("#colorbtn");
let mybox = document.querySelector("#mybox");
colorBtn.onclick = function(){
  let randomColor = `#`+ Math.floor(Math.random()*16777215).toString(16);
  mybox.style.backgroundColor = randomColor;
}
let shap= document.querySelector("#shapebtn");
shap.onclick = function(){
    mybox.classList.toggle("circle");
}
let hide = document.querySelector("#hidebtn")
hide.onclick = function(){
    mybox.classList.toggle("hide");
}






