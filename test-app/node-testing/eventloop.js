let x=0;
messageSent("START TASKS")
const path= require('path');
const fs= require('fs');
function messageSent(expression){
    x=x+1;
    console.log(expression+" ; message number "+ x)
}
function timerEvent(){
    messageSent("TASK MICROTASK")
    setTimeout(function(){
        messageSent("TIMER PHASE AT 1 SECOND DELAY")},1000);
}
function intervalEvent(){
    messageSent("TASK MICROTASK")
    setTimeout(function(){messageSent("TIMER PHASE at 0 delay")},0);
    
    let iteration =0;
    let timeOut= setInterval(()=>{
        if(iteration <3){
            process.nextTick(function(){messageSent("POLL PHASE")})
            setImmediate(function(){messageSent("CHECK PHASE")});
            messageSent("TIMER PHASE  START #" + iteration)
        } else{
            process.nextTick(function(){messageSent("POLL PHASE")})
            setImmediate(function(){messageSent("CHECK PHASE")})
            messageSent("TIMER PHASE #" + iteration+ " goodbye from TIMER PHASE! ")
            clearInterval(timeOut);
        }
        iteration++;
    });
};
timerEvent();
intervalEvent();
messageSent("END TASKS MICROTASKS")