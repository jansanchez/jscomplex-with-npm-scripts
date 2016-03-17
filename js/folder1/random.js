/*
file: random.js
*/

var arr = []
while(arr.length < 8){
  var randomNumber=Math.ceil(Math.random()*100)
  var found=false;

  for(var i=0;i<arr.length;i++){
	if(arr[i]==randomNumber){found=true;break}
  }
  if(!found)arr[arr.length]=randomNumber;
}
console.log(arr);
