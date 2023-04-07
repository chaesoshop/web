/*
// 휴대폰 번호 입력 부분
function changePhone1(){
  const phone1 = document.getElementById("phone1").value // 010
  if(phone1.length === 3){
      document.getElementById("phone2").focus();
  }
}
function changePhone2(){
  const phone2 = document.getElementById("phone2").value // 010
  if(phone2.length === 4){
      document.getElementById("phone3").focus();
  }
}
function changePhone3(){
  const phone2 = document.getElementById("phone3").value // 010
  if(phone2.length === 4){
      document.getElementById("phone3").focus();
  }
}
*/

// 가입부분 체크
function signUpCheck(){

let id = document.getElementById("id").value
let email = document.getElementById("email").value
let name = document.getElementById("name").value
let phone = document.getElementById("phone").value
let password = document.getElementById("password").value
let passwordCheck = document.getElementById("passwordCheck").value
let area = document.getElementById("area").value
let gender_man = document.getElementById("gender_man").checked
let gender_woman = document.getElementById("gender_woman").checked
let check = true;

// 아이디확인
if(id===""){
  document.getElementById("idError").innerHTML="아이디가 올바르지 않습니다."
  check = false
}else{
  document.getElementById("idError").innerHTML=""
}

// 이메일확인
if(email.includes('@')){
  let emailId = email.split('@')[0]
  let emailServer = email.split('@')[1]
  if(emailId === "" || emailServer === ""){
    document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
    check = false
  }
  else{
    document.getElementById("emailError").innerHTML=""
  }
}else{
  document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
  check = false
}

// 이름확인
if(name===""){
  document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
  check = false
}else{
  document.getElementById("nameError").innerHTML=""
}

// 비밀번호 확인
if(password !== passwordCheck){
  document.getElementById("passwordError").innerHTML=""
  document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
  check = false
}else{
  document.getElementById("passwordError").innerHTML=""
  document.getElementById("passwordCheckError").innerHTML=""
}

if(password===""){
  document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
  check = false
}else{
  //document.getElementById("passwordError").innerHTML=""
}
if(passwordCheck===""){
  document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
  check = false
}else{
  //document.getElementById("passwordCheckError").innerHTML=""
}

// 전화번호확인
if(phone ===""){
  document.getElementById("phoneError").innerHTML="전화번호가 올바르지 않습니다."
  check = false
}else{
  document.getElementById("phoneError").innerHTML=""
}

// 지역선택확인
if(area === "-"){
  document.getElementById("areaError").innerHTML="지역을 선택해주세요."
  check = false
}else{
  document.getElementById("areaError").innerHTML=""
}

// 성별체크확인
if(!gender_man && !gender_woman){
  document.getElementById("genderError").innerHTML="성별을 선택해주세요."
  check = false
}else{
  document.getElementById("genderError").innerHTML=""
}

if(check){
  document.getElementById("idError").innerHTML=""
  document.getElementById("emailError").innerHTML=""
  document.getElementById("nameError").innerHTML=""
  document.getElementById("phoneError").innerHTML=""
  document.getElementById("passwordError").innerHTML=""
  document.getElementById("passwordCheckError").innerHTML=""
  document.getElementById("areaError").innerHTML=""
  document.getElementById("genderError").innerHTML=""
  
  //비동기 처리이벤트
  setTimeout(function() {
    alert("가입이 완료되었습니다.")
},0);
}
}
