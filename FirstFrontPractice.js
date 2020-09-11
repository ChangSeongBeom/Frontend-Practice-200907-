/*var object = {
    id:"myid",
    name : "장성범"
}
console.log("TEST");
for(var attr in object)
{
    console.log(attr);
}
var elm1=document.body;
var elm2=document.createElement("div");

elm2.textContent="성범이";
document.body.append(elm2);*/

var originWord='장성범';
while(true){
    var inputString = prompt('문자열을 입력하세요', '기본 값 문자열'); 
    console.log(inputString[0]);
    console.log(originWord[originWord.length-1]);
    if(originWord[originWord.length-1]==inputString[0]){
        alert('쿵쿵따 성공');
        originWord=inputString;
        alert('다음문자는'+originWord);
    }

    else{
        alert('쿵쿵따 실패');

    }
}
