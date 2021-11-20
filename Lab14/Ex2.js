var fs = require('fs'); //import file system 

var filename ="./user_data.json"; //save the name of the file in a string
//checks if the file exists
if(fs.existsSync(filename)){
    data = fs.readFileSync(filename, 'utf-8');  //(method 1)JS will wait for this file to be read first

    user_data = JSON.parse(data); //parse the data
    console.log("User_data=", user_data);  
}else{
    console.log("Enter the correct filename bozo!");
    //you can add an exti("Exiting program"); to explicitly tell it to exit 
}
