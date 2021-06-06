console.log("hungry");
var heading = document.querySelector('#heading');  //id가 헤딩인 문서를 선택하겠다.
heading.onclick = function(){ //그 단어를 선택했을 시 //무의미 함수는 지금만 사용하고 사용하지 않을 때만 활용
  heading.style.color = "red";
// var reply = confirm("저장하시겠습니까?");
// console.log(reply);
var name =prompt("이름을 입력하세요","홍길동");
console.log(name);
document.write("<h1>어서오세요</h1>")
document.write("<b><big>"+name+"</big></b>님, 환영합니다.")
};

  // alert("텍스트를 클릭하세요");