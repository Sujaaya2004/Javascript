setTimeout(function()
{
console.log("Hello SKCET!!!");
},5000)
//spread operator 
rollno = [10,20,30,40]
console.log(rollno);
lrollno = [...rollno,50]
console.log(lrollno);
//destructing operator
arr = [20,30,"ABC"]
var [a,b,d]=arr
console.log(arr,a,b,d);
//for in loop
arr = [10,20,"hello",true]          
for (i in arr){
    console.log(i);
}
for (i of arr){
    console.log(i);
}
arr.forEach( ind => console.log(ind))