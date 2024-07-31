isLocationFound=(loc,time)=>{
    isLoc="SKCET";
    t=2000
    if(loc===isLoc && t<=time)
    {
        return true;
    }
    else
    {
        return false;
    }
};
function locationFinder()
{
    time=2000;
    loc="SKCET"
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
            if(isLocationFound(loc,time)){
                locFound("Location Found");
            }
            else
            {
                locNotFound("Location Not Found");
            }
        },time);
        });
    }

locationFinder()
    .then((val)=>{
    console.log(val);
})
.catch((val)=>{
    console.log(val);
});
//Promise
/*function proBaseEg()
{
    let prom = new Promise((resolve)=>{
        setTimeout(() => {
            resolve("This is a base Eg")
        },1000);
    })
    //console.log(prom); op: promise pending
    console.log(prom.then((val)=>{
        console.log(val);
    }));
}
proBaseEg()*/
/*function formValidation(fVc)
{
    setTimeout(()=> {console.log("Form validation called");
        console.log(fVc);
        //this or that
        formValidationCompleted(fVc)

    },2000)
    
}
function formValidationCompleted()
{
    console.log("Form validated");
}
formValidation(formValidationCompleted)*/