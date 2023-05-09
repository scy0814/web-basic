//return X, parameter X
function hi() {
    alert('hi!!!!');
    console.log("해위~");
}

function sum(x,y) {
    let result = x + y ;
    console.log(result);
}

function total(x,y) {
    return x + y ;
}

function start() {
//   let name = prompt("이름을 입력해 주세요");
  const name = prompt("이름을 입력해 주세요");
  // 지금 코드에서 바뀔 일이 없기 때문에 const가 더 좋음
  checkName(name);
}

function checkName(name) {
  if (name === null || name === "") {
    alert("다시입력해 주세요.");
    start();
  } else {
    console.log(name);
    alert(name + "님 안녕하세요.");
  }
}


function num() {
  let num = prompt("숫자를 입력해주세요");
  while(isNaN(num)){
    num = prompt("숫자를 다시 입력해주세요");
  }
  if(num < 1 || num > 100) {
    num = prompt("1이상 100이하를 넣어주세요");
  }else{
    for(num = 1; num <= 100 ; num++){
      console.log(num);
      if (num === 100) {
        alert("완료되었습니다.");
      }
    }
  }

}
