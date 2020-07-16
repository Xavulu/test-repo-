function reverseString(str) {
  let emptY = "";  
  let arr = str.split("");  
  for (let i = arr.length - 1; i >=0; i--){ 
    emptY += arr[i]; 
  }
  return emptY;
}

console.log(reverseString("hello"));
