
function inputPrompt(value){
  if(value === ""){
  alert("Please input a value");
  }
  else if(palindrome(value)){result.innerText = `${value} is a palindrome`
  } else {result.innerText = `${value} is not a palindrome`}
}

function palindrome(str) {
  let str2 = str.toLowerCase();
  let regex = /[a-z0-9]/g;
  let arr = str2.match(regex);
for(let i = 0; i < Math.floor(arr.length / 2); i++){
     if(arr[i] !== arr[arr.length - 1 - i]){
      return false;
      } 
   } 
  return true;
}




