var currentYear = 2021;
var birthYear, age;

birthYear = prompt("태어난 연도를 입력하세요. (YYYY)","");
age = currentYear - birthYear+1;
document.write(currentYear + "년 현재<br>");
document.write(birthYear+"년 태어난 사람의 나이는 "+age+"세입니다.");
