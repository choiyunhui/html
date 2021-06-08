var cover = document.querySelector(".carousel-inner");
cover.addEventListener("mouseover", function(){
  cover.style.opacity = "0.5";
});
cover.addEventListener("mouseout", function(){
  cover.style.opacity = "";
});

var img1 = document.querySelector(".first");
var img2 = document.querySelector(".second");
var img3 = document.querySelector(".third");
function showDetail(){
  if(img1.style.display == "none"){
    img1.style.display = "block";
  }
  else{
    img1.style.display="none";
  }
}
function showDetail2(){
  if(img2.style.display == "none"){
    img2.style.display = "block";
  }
  else{
    img2.style.display="none";
  }
}
function showDetail3(){
  if(img3.style.display == "none"){
    img3.style.display = "block";
  }
  else{
    img3.style.display="none";
  }
}



// if(img.style.display == "none"){
// function showDetail() {
//   document.querySelector(".card-img-top").style.display = "block";	// 상세 설명 부분을 화면에 표시
// }}
// else{
//   function hideDetail(){
//     document.querySelector('.card-img-top').style.display = "none";
//   }
//}