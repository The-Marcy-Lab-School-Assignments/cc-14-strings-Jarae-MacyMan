let strLowerCase = (str) => {
let newStr = "";
for (let i = 0; i < str.length; i++){
  if (str[i] === str[i].toLowerCase()){
     newStr += str[i];
  }
}
 return newStr;
};

console.log(strLowerCase("Yaya+Jarae!!BBHH"));//write your code here
