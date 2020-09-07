var object = {
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
document.body.append(elm2);