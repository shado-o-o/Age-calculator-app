let inputs=document.querySelectorAll(".input-aga input");
let labal =document.querySelectorAll(".input-aga label");
let outputs =document.querySelectorAll(".outvalue");
let labalError =document.querySelectorAll(".input-aga .error p");
function handleRsults(){
    let history={
        "days":inputs[0].value,
        "months":inputs[1].value,
        "years":inputs[2].value,
    }
    if (history.days==='') {
             inputs[0].style.border="2px solid red";
             labal[0].style.color="red";
             labalError[0].innerHTML=" must be not empty";
    }else if(history.days >31){
      inputs[0].style.border="2px solid red";
      labal[0].style.color="red";
      labalError[0].innerHTML="must be volid day";
    }else if(history.days){
        inputs[0].style.border="2px solid green";
        labal[0].style.color="green";
        labalError[0].style.color="green"
        labalError[0].innerHTML="Good";
    }
    if (history.months==='') {
        inputs[1].style.border="2px solid red";
        labal[2].style.color="red";
        labalError[1].innerHTML=" must be not empty";
    }else if(history.months >12){
        inputs[1].style.border="2px solid red";
        labal[2].style.color="red";
        labalError[1].innerHTML="must be volid month";
      }else if(history.months){
          inputs[1].style.border="2px solid green";
          labal[2].style.color="green";
          labalError[1].style.color="green"
          labalError[1].innerHTML="Good";
      }
    if (history.years==='') {
        inputs[2].style.border="2px solid red";
        labal[4].style.color="red";
        labalError[2].innerHTML=" must be not empty";
    }else if(history.years >2024){
        inputs[2].style.border="2px solid red";
        labal[4].style.color="red";
        labalError[2].innerHTML="must be volid year";
      }else if(history.years <1000){
        inputs[2].style.border="2px solid red";
        labal[4].style.color="red";
        labalError[2].innerHTML="must be volid year";
    }else if(history.years){
          inputs[2].style.border="2px solid green";
          labal[4].style.color="green";
          labalError[2].style.color="green"
          labalError[2].innerHTML="Good";
      }
    if (history.days && history.months && history.years ) {
      if (history.days <=31 && history.months <=12 && history.years<=2024 &&history.years>=1000) {
           
            let data= new Date();
            let day =data.getDate();
            let month=data.getMonth()+1;
            let year =data.getFullYear();
            let days= day-history.days;
            let months= month-history.months;
            let years= year-history.years;
            outputs[2].innerHTML= Math.abs(days);
            outputs[1].innerHTML= Math.abs(months);
            outputs[0].innerHTML= Math.abs(years);
      
    }
  
}
    
}
