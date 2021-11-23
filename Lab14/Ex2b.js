var fs = require('fs'); //import file system 
const { exit } = require('process');   //automatically shows up when adding exit(); on line 14


var filename ="./user_data.json"; //save the name of the file in a string
//checks if the file exists
if(fs.existsSync(filename)){
    data = fs.readFileSync(filename, 'utf-8');  //(method 1)JS will wait for this file to be read first

    user_data = JSON.parse(data); //parse the data
    console.log("User_data=", user_data);

    //Save the file statistics in a variable
    fileStats = fs.statSync(filename);
    console.log("File" + filename + "has" + fileStats.size + "characters");
}else{
    console.log("Enter the correct filename bozo!");
    // exit("Exiting program"); to explicitly tell it to exit. (Already do this so not toally necessary in this example)

}