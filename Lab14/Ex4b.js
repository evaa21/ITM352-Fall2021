var fs = require('fs'); //import file system 


var express = require('express');
var app = express();
var myParser = require("body-parser");

app.use(myParser.urlencoded({ extended: true }));

app.use(express.static('./public'));  //tell our server to look in the public folder for redirection

var filename ="./user_data.json"; //save the name of the file in a string 
//Need queryString! Without query string we can't parse the body //If it can't find queryString, then npm install query-string
var queryString = require("query-string");

//checks if the file exists
if(fs.existsSync(filename)){
    data = fs.readFileSync(filename, 'utf-8');  //(method 1)JS will wait for this file to be read first

    //parse the data
    user_data = JSON.parse(data); 
    console.log("User_data=", user_data);

    //Save the file statistics in a variable
    fileStats = fs.statSync(filename);
    console.log("File" + filename + "has" + fileStats.size + "characters");
}else{
    console.log("Enter the correct filename bozo!");

    
    
}

//read in the file & its contents //Don't forget to npm install express
app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

//Retreived the username and password from the form
 app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    console.log("Got a POST to login");
    //Grab the information
    POST = request.body;

    user_name = POST["username"]; //grabbing the name="username" out of the form and using it as indexes for the POST array to grab user_name & user_password
    user_pass = POST["password"];
    console.log("User name=" + user_name + "password=" + user_pass); 

    //Check it
    if (user_data[user_name]!= undefined) {
        if(user_data[user_name].password == user_pass){
            //Good login
            response.redirect("products_page.html");
        }else{
            //Bad login, redirect them to the login page
            console.log("Bad password");
            response.send("Sorry bud");
        }
    }else{
        //Bad username
        console.log("Bad Username");
        response.send("bad username")
    }
    


});
//Create a register function 
app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
<body>
<form action="/register" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

 app.post("/register", function (request, response) {
    // process a simple register form
    console.log("Got a POST to register");
    //Grab the information
    POST = request.body;

    user_name = POST["username"]; //grabbing the name="username" out of the form and using it as indexes for the POST array to grab user_name & user_password
    user_pass = POST["password"];
    user_email = POST["email"];

    console.log("User name=" + user_name + "password=" + user_pass); 

    user_data[user_name] = {};
    user_data[user_name].name = user_name;
    user_data[user_name].password = user_pass;
    user_data[user_name].email = user_email;
    

    //Stringify before writing it into the file
    data = JSON.stringify(user_data);
    //write it to the file
    fs.writeFileSync(filename, data, "utf-8");
    //Send success message
    response.send("User " + user_name + " added!");
 });


app.listen(8080, () => console.log(`listening on port 8080`));
