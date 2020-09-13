var buttonTest=document.createElement('button');
buttonTest.textContent="CLICK";
document.body.append(buttonTest);
 
var originWord='장성범';

buttonTest.addEventListener('click', function callbackFunction(){
    var word=document.getElementById('nameValue').value;

    if(originWord[originWord.length-1]==word[0]){
        alert('정답이에요');
        originWord=word;
    }
    else{
        alert('틀렸어요');
    }
});


