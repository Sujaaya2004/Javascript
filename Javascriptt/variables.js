var evenodd = (a) => 
{
    return a%2==0;
}
console.log(evenodd(5));
//setINTERVAL func
/*console.log("set interval");
setInterval(function()
{
    console.log("hello SKCET");
    console.log("Welcome !!!")
},2000)*/
//timeout
/*console.log("set timeout");
setTimeout(function()
{
console.log("Hello SKCET!!!");
},5000)*/
//spread operator 
/*rollno = [10,20,30,40]
console.log(rollno);
lrollno = [...rollno,50]
console.log(lrollno);*/
//destructing operator
/*arr = [20,30,"ABC"]
var [a,b,d]=arr
console.log(arr,a,b,d);*/
//for in loop
/*arr = [10,20,"hello",true]          
for (i in arr){
    console.log(i);
}
for (i of arr){
    console.log(i);
}
arr.forEach( ind => console.log(ind))*/
/*signup code
username = "suj22"
pwd = "s22"
cnfpwd = "s22"
if(username){
    if(pwd)
    {
        if(cnfpwd)
        {
            if(pwd == cnfpwd){
                console.log("SignUp Successful");
            }
            else{
                console.log("Passwords do not match")
            }
        }
        else{
            console.log("Type your confirm password");
        }
    }
    else{
        console.log("type your password");
    }
}
else{
    console.log("Type your username");
}
  2.  var email = "info@rampex.in"
var pwd = "13445"
var usertypingemail = "info@rampex.in"
var usertypingpwd = "13445"
if(usertypingemail == email)
{
if(usertypingpwd == pwd)
{
    console.log("Login Successful");
}
else{
    console.log("Invalid Password");
}
}
else{
console.log("invalid email");
}*/