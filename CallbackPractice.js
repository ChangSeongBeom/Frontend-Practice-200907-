var buttonTest=document.createElement('button');
buttonTest.textContent="CLICK";
document.body.append(buttonTest);
 

buttonTest.addEventListener('click', function callbackFunction(){
    var test=document.getElementById('nameValue').value;
    alert(test);
});



