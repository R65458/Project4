//alert("JavaScript works!");

//Stacy Purdee
//SDI 1310
//October 24th 2013
//Wk 4 Library

var myLibrary = function(){
    

    
//Is the string a URL?

var stringURL = function(website){
var url1 = "http://";
var url2 = "https://";

if (website.indexOf(url1)===0){
    
return true;

}else if (website.indexOf(url2)===0){
    
return true;
    
    } else {
    
return false;
   };
};                


 //Given a string version of a number, return the value as an actual number such as "42"

var stringToInt = function(string){

if(isNaN(string)){
   console.log("This is not a number");

} else {

parseInt(string);

return string

   };
};   
    
    
 //Does a string follow a 123-456-7890 pattern like a phone number?

var stringPhone = function(number){

if (number(3) === "-"){
    } if (number(7) === "-"){
    
return true;


}else{
    return false;
    };
};


  //Format a number to use a specific number of places such as with money

var specDecPlaces = function(number, places){
var number = number.toFixed(places);
return number;
};

//Return a string with the first separator changed to the second

var symbolreplace = function(string, symbol1, symbol2){
var string1= string.replace(symbol1, symbol2);
var string2= string1.replace(symbol1,symbol2);
return string2;
};

//Find the total value of just the numbers in an array

var addArray = function(array){
var total = 0;
var j = array.length;

for (var i =0; i < j ; i ++){

if (array(i)/1 === array(i));

   };

return total;

return{
"stringURL":stringURL,
"stringToInt":stringToInt,
"stringPhone":stringPhone,
"SpecDec":symbolReplace,
"addArray":addArray
  };

};
    
    
var myLibrary = new MyLibrary();
var randomArrayItems = ("HTML", 3, 8,"JavaScript","10");

console.log(myLibrary.stringURL("http://www.full-sail.edu"));
console.log(myLibrary.stringToInt(42));
console.log(myLibrary.stringPhone("478-998-0682"));
console.log(myLibrary.specDec(7,1,1));
console.log(myLibrary.symbolReplace("A & B & C", "&", ","));
console.log(myLibrary.addArray(randomArrayItems));  

}   
