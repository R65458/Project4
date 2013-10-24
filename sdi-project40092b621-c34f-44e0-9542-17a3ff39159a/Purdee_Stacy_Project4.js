//alert("JavaScript works!");

//Stacy Purdee
//SDI 1310
//October 24th 2013
//Wk 4 Library

var myLibrary(){
    

    
//Is the string a URL?

var stringURL = function(website){
var url1 = "http://";
var url2 = "https://";

if (website.indexOf(url1)===0){
    return true;
}else if (website.indexOf(url2)===0){
    return true;
}else{
    return false;
   };
};                


 //Given a string version of a number, return the value as an actual number such as "42"

var stringToInt = function(string){

if(isNaN(string)){
   console.log("This is not a number");
} else{
parseInt(string);
return string

   };
};   
    
    
    
    
    
    
    
    
    
}