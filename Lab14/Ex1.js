var fs = require('fs'); //import file system 

var filename ="./user_data.json"; //save the name of the file in a string

data = fs.readFileSync(filename, 'utf-8');  //(method 1)JS will wait for this file to be read first

user_data = JSON.parse(data); //parse the data
console.log("User_data=", user_data);

user_data2 = require(filename);  //(method 2) require does the parsing for me 
console.log("User data2=", user_data2);  